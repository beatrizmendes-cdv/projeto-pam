import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurbinesService } from './turbines.service.js';
import { CreateTurbineDto } from './dto/create-turbine.dto.js';
import { UpdateTurbineDto } from './dto/update-turbine.dto.js';

@Controller('turbines')
export class TurbinesController {
  constructor(private readonly turbinesService: TurbinesService) {}

  @Post()
  create(@Body() createTurbineDto: CreateTurbineDto) {
    return this.turbinesService.create(createTurbineDto);
  }

  @Get()
  findAll() {
    return this.turbinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turbinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurbineDto: UpdateTurbineDto) {
    return this.turbinesService.update(+id, updateTurbineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turbinesService.remove(+id);
  }
}
