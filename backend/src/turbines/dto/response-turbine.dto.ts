import { ApiProperty } from '@nestjs/swagger';
import { PointCoordinatesDto } from './create-turbine.dto.js';

export class ResponseTurbineDto {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({ type: String, example: 'Turbina 1' })
  name: string;

  @ApiProperty({ type: () => PointCoordinatesDto })
  coordinates: PointCoordinatesDto;

  @ApiProperty({ type: Number, example: 1 })
  turbine_catalog_id: number;

  @ApiProperty({ type: Number, example: 1 })
  simulation_id: number;
}