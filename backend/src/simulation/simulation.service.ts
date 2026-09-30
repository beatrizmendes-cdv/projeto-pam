import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSimulationDto } from './dto/create-simulation.dto.js';
import { UpdateSimulationDto } from './dto/update-simulation.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Simulation } from './entities/simulation.entity.js';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class SimulationService {
  constructor(@InjectRepository(Simulation) private readonly simulationRepository: Repository<Simulation>) { }

  async create(createSimulationDto: CreateSimulationDto): Promise<Simulation> {
    const exists = await this.simulationRepository.findOneBy({ name: createSimulationDto.name })
    if (exists) {
      throw new ConflictException("Já existe uma simulação com o nome inserido.");
    }
    const simulation = this.simulationRepository.create(createSimulationDto);
    return await this.simulationRepository.save(simulation);
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
