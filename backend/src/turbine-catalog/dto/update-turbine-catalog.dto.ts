import { PartialType } from '@nestjs/mapped-types';
import { CreateTurbineCatalogDto } from './create-turbine-catalog.dto.js';

export class UpdateTurbineCatalogDto extends PartialType(CreateTurbineCatalogDto) {}
