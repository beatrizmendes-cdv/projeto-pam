import { ApiProperty } from '@nestjs/swagger';
import { CreateSimulationDto } from './create-simulation.dto.js';

export class ResponseSimulationDto {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({type: String, example: "Simulacao 1"})
  name: string
}