import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SimulationService } from './simulation.service.js';
import { CreateSimulationDto } from './dto/create-simulation.dto.js';
import { UpdateSimulationDto } from './dto/update-simulation.dto.js';
import { ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags("Simulation")
@Controller('simulation')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) { }

  @Post()
  create(@Body() createSimulationDto: CreateSimulationDto) {
    return this.simulationService.create(createSimulationDto);
  }

  @Get()
  findAll() {
    return this.simulationService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  findOne(@Param('id') id: string) {
    return this.simulationService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  update(@Param('id') id: string, @Body() updateSimulationDto: UpdateSimulationDto) {
    return this.simulationService.update(+id, updateSimulationDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  remove(@Param('id') id: string) {
    return this.simulationService.remove(+id);
  }
}
