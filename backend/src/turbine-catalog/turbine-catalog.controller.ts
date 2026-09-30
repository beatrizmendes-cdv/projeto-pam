import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurbineCatalogService } from './turbine-catalog.service.js';
import { CreateTurbineCatalogDto } from './dto/create-turbine-catalog.dto.js';
import { UpdateTurbineCatalogDto } from './dto/update-turbine-catalog.dto.js';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ResponseTurbineCatalogDto } from './dto/response-turbine-catalog.dto.js';

@ApiTags('turbines-catalog')
@Controller('turbine-catalog')
export class TurbineCatalogController {
  constructor(private readonly turbineCatalogService: TurbineCatalogService) { }

  @Post()
  @ApiBody({ type: CreateTurbineCatalogDto })
  @ApiCreatedResponse({ type: ResponseTurbineCatalogDto })
  create(@Body() createTurbineCatalogDto: CreateTurbineCatalogDto) {
    return this.turbineCatalogService.create(createTurbineCatalogDto);
  }

  @Get()
  @ApiOkResponse({type: ResponseTurbineCatalogDto, isArray:true})
  findAll() {
    return this.turbineCatalogService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiOkResponse({ type: ResponseTurbineCatalogDto })
  findOne(@Param('id') id: string) {
    return this.turbineCatalogService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiBody({type:UpdateTurbineCatalogDto})
  @ApiOkResponse({ type: ResponseTurbineCatalogDto })
  update(@Param('id') id: string, @Body() updateTurbineCatalogDto: UpdateTurbineCatalogDto) {
    return this.turbineCatalogService.update(+id, updateTurbineCatalogDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id", description: "ID do catalogo", type: Number })
  @ApiOkResponse({
    schema: {type: 'object',required: ['message'],properties: {message: { type: 'string' },},},
  })
  remove(@Param('id') id: string) {
    return this.turbineCatalogService.remove(+id);
  }
}
