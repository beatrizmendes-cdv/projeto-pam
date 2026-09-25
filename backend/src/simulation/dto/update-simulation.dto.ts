import { PartialType } from '@nestjs/mapped-types';
import { CreateSimulationDto } from './create-simulation.dto.js';

export class UpdateSimulationDto extends PartialType(CreateSimulationDto) {}
