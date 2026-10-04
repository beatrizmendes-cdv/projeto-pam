import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSimulationDto } from './dto/create-simulation.dto.js';
import { UpdateSimulationDto } from './dto/update-simulation.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Simulation } from './entities/simulation.entity.js';
import { ResponseSimulationDto } from './dto/response-simulation.dto.js';
import { Turbine } from '../turbines/entities/turbine.entity.js';
import { In, IsNull, Repository } from 'typeorm';

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

  async update(id: number, updateSimulationDto: UpdateSimulationDto): Promise<Simulation> {
    const simulation = await this.findOne(id);
    const update = this.simulationRepository.merge(simulation, updateSimulationDto);
    return await this.simulationRepository.save(update);
  }

  async remove(id: number): Promise<{ message: string }> {
    const simulation = await this.findOne(id);
    await this.simulationRepository.remove(simulation);
    return { message: "Simulação removida com sucesso." }

  }
}
