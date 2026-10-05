import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurbineCatalogDto } from './dto/create-turbine-catalog.dto.js';
import { UpdateTurbineCatalogDto } from './dto/update-turbine-catalog.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { TurbineCatalog } from './entities/turbine-catalog.entity.js';
import { Not, QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class TurbineCatalogService {

  constructor(@InjectRepository(TurbineCatalog) private readonly catalogRepository: Repository<TurbineCatalog>) {
  }

  async create(createTurbineCatalogDto: CreateTurbineCatalogDto): Promise<TurbineCatalog> {
    const exists = await this.catalogRepository.findOneBy({ name: createTurbineCatalogDto.name, manufacturer: createTurbineCatalogDto.manufacturer });
    if (exists) {
      throw new ConflictException("Já existe uma turbina com o mesmo nome e fabricante.");
    }
    const turbineCatalog = this.catalogRepository.create(createTurbineCatalogDto);
    return await this.catalogRepository.save(turbineCatalog);

  }

  async findAll(): Promise<TurbineCatalog[]> {
    return await this.catalogRepository.find();
  }

  async findOne(id: number): Promise<TurbineCatalog> {
    const turbineCatalog = await this.catalogRepository.findOneBy({ id });
    if (!turbineCatalog) {
      throw new NotFoundException("Turbina com não encontrada.");
    }
    return turbineCatalog;
  }

    async update(id: number, dto: UpdateTurbineCatalogDto): Promise<TurbineCatalog> {
        const catalog = await this.findOne(id);
        const updated = this.catalogRepository.merge(catalog, dto);

        const exists = await this.catalogRepository.findOneBy({ id: Not(id), name: updated.name, manufacturer: updated.manufacturer });

        if (exists) {
            throw new ConflictException("Já existe outro modelo com o mesmo nome e fabricante.");
        }

        return this.catalogRepository.save(updated);
    }

  async remove(id: number): Promise<{ message: string }> {
        const catalog = await this.findOne(id);

        try {
            await this.catalogRepository.remove(catalog);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                const databaseError = error.driverError as { code?: string };

                if (databaseError.code === "23503") {
                    throw new ConflictException("Este modelo está associado a turbinas e não pode ser excluído.");
                }
            }

            throw error;
        }

        return { message: "Modelo removido com sucesso." };
    }
}