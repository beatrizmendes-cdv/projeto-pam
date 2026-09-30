import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurbinesService } from './turbines.service.js';
import { CreateTurbineDto } from './dto/create-turbine.dto.js';
import { UpdateTurbineDto } from './dto/update-turbine.dto.js';
import { ApiTags, ApiParam, ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ResponseTurbineDto } from './dto/response-turbine.dto.js';
@ApiTags("turbine")
@Controller('turbines')
export class TurbinesController {
  constructor(private readonly turbinesService: TurbinesService) { }

  @Post()
  @ApiBody({type: CreateTurbineDto})
  @ApiCreatedResponse({type: ResponseTurbineDto})
  create(@Body() createTurbineDto: CreateTurbineDto) {
    return this.turbinesService.create(createTurbineDto);
  }

  @Get()
  @ApiOkResponse({type: ResponseTurbineDto, isArray: true})
  findAll() {
    return this.turbinesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiOkResponse({ type: ResponseTurbineDto })
  findOne(@Param('id') id: string) {
    return this.turbinesService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiBody({ type: UpdateTurbineDto })
  @ApiOkResponse({ type: ResponseTurbineDto })
  update(@Param('id') id: string, @Body() updateTurbineDto: UpdateTurbineDto) {
    return this.turbinesService.update(+id, updateTurbineDto);
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
    return this.turbinesService.remove(+id);
  }
}
