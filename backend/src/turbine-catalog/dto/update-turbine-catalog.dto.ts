import { PartialType } from '@nestjs/swagger';
import { CreateTurbineCatalogDto } from './create-turbine-catalog.dto.js';

export class UpdateTurbineCatalogDto extends PartialType(CreateTurbineCatalogDto) {}
