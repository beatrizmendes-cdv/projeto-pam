import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SimulationService } from './simulation.service.js';
import { CreateSimulationDto } from './dto/create-simulation.dto.js';
import { UpdateSimulationDto } from './dto/update-simulation.dto.js';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ResponseSimulationDto } from './dto/response-simulation.dto.js';
@ApiTags("Simulation")
@Controller('simulation')
export class SimulationController {
  constructor(private readonly simulationService: SimulationService) { }

  @Post()
  @ApiBody({ type: CreateSimulationDto })
  @ApiCreatedResponse({ type: ResponseSimulationDto })
  create(@Body() createSimulationDto: CreateSimulationDto) {
    return this.simulationService.create(createSimulationDto);
  }

  @Get()  
  @ApiOkResponse({
    type: ResponseSimulationDto,
    isArray: true,
  })
  findAll() {
    return this.simulationService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiOkResponse({ type: ResponseSimulationDto })
  findOne(@Param('id') id: string) {
    return this.simulationService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiBody({ type: UpdateSimulationDto })
  @ApiOkResponse({ type: ResponseSimulationDto })
  update(@Param('id') id: string, @Body() updateSimulationDto: UpdateSimulationDto) {
    return this.simulationService.update(+id, updateSimulationDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiOkResponse({
    schema: {
      type: 'object',
      required: ['message'],
      properties: {
        message: { type: 'string' },
      },
    },
  })
  remove(@Param('id') id: string) {
    return this.simulationService.remove(+id);
  }
}
