import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurbinesService } from './turbines.service.js';
import { CreateTurbineDto } from './dto/create-turbine.dto.js';
import { UpdateTurbineDto } from './dto/update-turbine.dto.js';
import { ApiTags, ApiParam } from '@nestjs/swagger';
@ApiTags("turbine")
@Controller('turbines')
export class TurbinesController {
  constructor(private readonly turbinesService: TurbinesService) { }

  @Post()
  create(@Body() createTurbineDto: CreateTurbineDto) {
    return this.turbinesService.create(createTurbineDto);
  }

  @Get()
  findAll() {
    return this.turbinesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  findOne(@Param('id') id: string) {
    return this.turbinesService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  update(@Param('id') id: string, @Body() updateTurbineDto: UpdateTurbineDto) {
    return this.turbinesService.update(+id, updateTurbineDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  remove(@Param('id') id: string) {
    return this.turbinesService.remove(+id);
  }
}
