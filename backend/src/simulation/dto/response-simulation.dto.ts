import { ApiProperty } from '@nestjs/swagger';
import { CreateSimulationDto } from './create-simulation.dto.js';

export class ResponseSimulationDto extends CreateSimulationDto {
  @ApiProperty({ type: Number, example: 1 })
  id: number;
}