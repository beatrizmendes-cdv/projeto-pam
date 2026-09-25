import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurbineCatalogService } from './turbine-catalog.service.js';
import { CreateTurbineCatalogDto } from './dto/create-turbine-catalog.dto.js';
import { UpdateTurbineCatalogDto } from './dto/update-turbine-catalog.dto.js';

@Controller('turbine-catalog')
export class TurbineCatalogController {
  constructor(private readonly turbineCatalogService: TurbineCatalogService) {}

  @Post()
  create(@Body() createTurbineCatalogDto: CreateTurbineCatalogDto) {
    return this.turbineCatalogService.create(createTurbineCatalogDto);
  }

  @Get()
  findAll() {
    return this.turbineCatalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turbineCatalogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurbineCatalogDto: UpdateTurbineCatalogDto) {
    return this.turbineCatalogService.update(+id, updateTurbineCatalogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turbineCatalogService.remove(+id);
  }
}
