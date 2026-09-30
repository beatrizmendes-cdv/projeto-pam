import { PartialType } from '@nestjs/swagger';
import { CreateTurbineDto } from './create-turbine.dto.js';

export class UpdateTurbineDto extends PartialType(CreateTurbineDto) {}
