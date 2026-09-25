import { PartialType } from '@nestjs/mapped-types';
import { CreateTurbineDto } from './create-turbine.dto.js';

export class UpdateTurbineDto extends PartialType(CreateTurbineDto) {}
