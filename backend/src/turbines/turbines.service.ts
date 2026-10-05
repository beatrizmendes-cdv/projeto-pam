import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurbineDto } from './dto/create-turbine.dto.js';
import { UpdateTurbineDto } from './dto/update-turbine.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Turbine } from './entities/turbine.entity.js';
import { ResponseTurbineDto } from './dto/response-turbine.dto.js';
import { Not, Repository } from "typeorm";

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

  async findAll(): Promise<ResponseTurbineDto[]> {
    const turbines = await this.turbineRepository.find();

    return turbines.map((turbine) => ({
      id: turbine.id,
      name: turbine.name,
      coordinates: {
        type: turbine.coordinates.type ?? 'Point',
        coordinates: [
          turbine.coordinates.coordinates[0],
          turbine.coordinates.coordinates[1],
        ] as [number, number],
      },
      turbine_catalog_id: turbine.turbine_catalog_id,
      simulation_id: turbine.simulation_id,
    }));
  }

  async findOne(id: number): Promise<Turbine> {
    const turbine = await this.turbineRepository.findOneBy({ id });
    if (!turbine) {
      throw new NotFoundException("Turbina com não encontrada.");
    }
    return turbine;
  }

  async update(id: number, dto: UpdateTurbineDto): Promise<Turbine> {
    await this.findOne(id);

    if (dto.coordinates !== undefined) {
        const exists = await this.turbineRepository.findOneBy({ id: Not(id), coordinates: dto.coordinates });

        if (exists) {
            throw new ConflictException("Já existe outra turbina com essas coordenadas.");
        }
    }

    if (Object.keys(dto).length > 0) {
        await this.turbineRepository.update(id, dto);
    }

    return this.findOne(id);
}

  async remove(id: number): Promise<{ message: string }> {
    const turbine = await this.findOne(id);
    await this.turbineRepository.remove(turbine);
    return { message: "Turbina removida com sucesso." }
  }
}
