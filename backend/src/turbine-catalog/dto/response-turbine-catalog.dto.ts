import { ApiProperty } from "@nestjs/swagger";
import { CreateTurbineCatalogDto } from "./create-turbine-catalog.dto.js";

export class ResponseTurbineCatalogDto extends CreateTurbineCatalogDto{
    @ApiProperty({type:Number, example:1})
    id: number;

    @ApiProperty({
        type: String, format: 'date-time', example: '2026-09-30T12:00:00.000Z'
    })
    created_at:Date;
}