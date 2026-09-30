import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTurbineCatalogDto } from './dto/create-turbine-catalog.dto.js';
import { UpdateTurbineCatalogDto } from './dto/update-turbine-catalog.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { TurbineCatalog } from './entities/turbine-catalog.entity.js';
import { Repository } from 'typeorm';

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

  async update(id: number, updateTurbineCatalogDto: UpdateTurbineCatalogDto): Promise<TurbineCatalog> {
    const catalog = await this.findOne(id);
    const update = this.catalogRepository.merge(catalog, updateTurbineCatalogDto);
    return await this.catalogRepository.save(update);
  }

  async remove(id: number): Promise<{ message: string }> {
    const catalog = await this.findOne(id);
    await this.catalogRepository.remove(catalog);
    return { message: "Turbina removida com sucesso." }
  }
}
