import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurbineDto } from './dto/create-turbine.dto.js';
import { UpdateTurbineDto } from './dto/update-turbine.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Turbine } from './entities/turbine.entity.js';
import { Repository } from 'typeorm/browser/repository/Repository.js';

@Injectable()
export class TurbinesService {
  constructor(@InjectRepository(Turbine) private readonly turbineRepository: Repository<Turbine>) { }

  async create(createTurbineDto: CreateTurbineDto) {
    const exists = await this.turbineRepository.findOneBy({ coordinates: createTurbineDto.coordinates });
    if (exists) {
      throw new ConflictException("Já existe uma turbina com as coordenadas inseridas.")
    }
    const turbine = this.turbineRepository.create(createTurbineDto)
    return await this.turbineRepository.save(turbine);
  }

  async findAll(): Promise<Turbine[]> {
    return await this.turbineRepository.find();
  }

  async findOne(id: number): Promise<Turbine> {
    const turbine = await this.turbineRepository.findOneBy({ id });
    if (!turbine) {
      throw new NotFoundException("Turbina com não encontrada.");
    }
    return turbine;
  }

  async update(id: number, updateTurbineDto: UpdateTurbineDto): Promise<Turbine> {
    const turbine = await this.findOne(id);
    const update = this.turbineRepository.merge(turbine, updateTurbineDto);
    return await this.turbineRepository.save(update);
  }

  async remove(id: number): Promise<{ message: string }> {
    const turbine = await this.findOne(id);
    await this.turbineRepository.remove(turbine);
    return { message: "Turbina removida com sucesso." }
  }
}
