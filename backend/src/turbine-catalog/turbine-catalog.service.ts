import { Injectable } from '@nestjs/common';
import { CreateTurbineCatalogDto } from './dto/create-turbine-catalog.dto.js';
import { UpdateTurbineCatalogDto } from './dto/update-turbine-catalog.dto.js';

@Injectable()
export class TurbineCatalogService {
  create(createTurbineCatalogDto: CreateTurbineCatalogDto) {
    return 'This action adds a new turbineCatalog';
  }

  findAll() {
    return `This action returns all turbineCatalog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turbineCatalog`;
  }

  update(id: number, updateTurbineCatalogDto: UpdateTurbineCatalogDto) {
    return `This action updates a #${id} turbineCatalog`;
  }

  remove(id: number) {
    return `This action removes a #${id} turbineCatalog`;
  }
}
