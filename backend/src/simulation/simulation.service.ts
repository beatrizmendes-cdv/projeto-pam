import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSimulationDto } from './dto/create-simulation.dto.js';
import { UpdateSimulationDto } from './dto/update-simulation.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Simulation } from './entities/simulation.entity.js';
import { ResponseSimulationDto } from './dto/response-simulation.dto.js';
import { Turbine } from '../turbines/entities/turbine.entity.js';
import { In, IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class SimulationService {
  constructor(@InjectRepository(Simulation) private readonly simulationRepository: Repository<Simulation>) { }

  async create(dto: CreateSimulationDto): Promise<ResponseSimulationDto> {
        return this.simulationRepository.manager.transaction(async (manager) => {
            const simulations = manager.getRepository(Simulation);
            const turbines = manager.getRepository(Turbine);

            const exists = await simulations.findOneBy({ name: dto.name });

            if (exists) {
                throw new ConflictException("Já existe uma simulação com o nome inserido.");
            }

            const simulation = await simulations.save(simulations.create({ name: dto.name }));

            const result = await turbines.update(
                { id: In(dto.turbine_ids), simulation_id: IsNull() },
                { simulation_id: simulation.id },
            );

            if (result.affected !== dto.turbine_ids.length) {
                throw new ConflictException("Uma ou mais turbinas não existem ou já pertencem a uma simulação. Atualize a lista e selecione novamente.");
            }

            return { id: simulation.id, name: simulation.name };
        });
    }

  async findAll(): Promise<Simulation[]> {
    return await this.simulationRepository.find();
  }

  async findOne(id: number): Promise<Simulation> {
    const simulation = await this.simulationRepository.findOneBy({ id })
    if (!simulation) {
      throw new NotFoundException("Simulação não encontrada.");
    }
    return simulation;

  }

  async update(id: number, dto: UpdateSimulationDto): Promise<ResponseSimulationDto> {
        return this.simulationRepository.manager.transaction(async (manager) => {
            const simulations = manager.getRepository(Simulation);
            const turbines = manager.getRepository(Turbine);

            const simulation = await simulations.findOne({ where: { id }, lock: { mode: "pessimistic_write" } });

            if (!simulation) {
                throw new NotFoundException("Simulação não encontrada.");
            }

            if (dto.name !== undefined) {
                const exists = await simulations.findOneBy({ id: Not(id), name: dto.name });

                if (exists) {
                    throw new ConflictException("Já existe outra simulação com esse nome.");
                }

                simulation.name = dto.name;
            }

            if (dto.turbine_ids !== undefined) {
                const result = await turbines.update(
                    [
                        { id: In(dto.turbine_ids), simulation_id: IsNull() },
                        { id: In(dto.turbine_ids), simulation_id: id },
                    ],
                    { simulation_id: id },
                );

                if (result.affected !== dto.turbine_ids.length) {
                    throw new ConflictException("Uma ou mais turbinas não existem ou já pertencem a outra simulação. Atualize a lista.");
                }

                await turbines.update(
                    { simulation_id: id, id: Not(In(dto.turbine_ids)) },
                    { simulation_id: null },
                );
            }

            const saved = await simulations.save(simulation);
            return { id: saved.id, name: saved.name };
        });
    }

    async remove(id: number): Promise<{ message: string }> {
        return this.simulationRepository.manager.transaction(async (manager) => {
            const simulations = manager.getRepository(Simulation);
            const turbines = manager.getRepository(Turbine);

            const simulation = await simulations.findOne({ where: { id }, lock: { mode: "pessimistic_write" } });

            if (!simulation) {
                throw new NotFoundException("Simulação não encontrada.");
            }

            await turbines.update({ simulation_id: id }, { simulation_id: null });
            await simulations.remove(simulation);

            return { message: "Simulação removida. Suas turbinas estão livres." };
        });
    }
}
