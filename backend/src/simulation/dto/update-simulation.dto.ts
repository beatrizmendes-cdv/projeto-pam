import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateSimulationDto } from './create-simulation.dto.js';

export class UpdateSimulationDto extends PartialType(OmitType(CreateSimulationDto, ["turbine_ids"] as const)) {}
