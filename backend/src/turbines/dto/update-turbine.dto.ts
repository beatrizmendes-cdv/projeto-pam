import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateTurbineDto } from './create-turbine.dto.js';


export class UpdateTurbineDto extends PartialType(OmitType(CreateTurbineDto, ["simulation_id"] as const)) {}