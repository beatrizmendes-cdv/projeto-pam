import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize, Equals, IsArray, IsDefined, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class PointCoordinatesDto {
    @ApiProperty({ example: 'Point', enum: ['Point'] })
    @Equals('Point', { message: 'O tipo da coordenada deve ser "Point"' })
    type: 'Point';

    @ApiProperty({
        example: [-38.523, -3.731],
        description: 'Array com [longitude, latitude]',
    })
    @IsArray({ message: 'Coordinates deve ser um array com longitude e latitude' })
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @IsNumber({}, { each: true, message: 'As coordenadas devem ser números válidos' })
    coordinates: [number, number];
}

export class CreateTurbineDto {
    @ApiProperty({
        description: "Nome da turbina",
        example: "Turbina 1"
    })
    @IsString({ message: "O nome da turbina deve ser um texto." })
    @IsNotEmpty({ message: "O nome da turbina não pode ser vazio." })
    name: string;

    @ApiProperty({
        type: PointCoordinatesDto,
        description: 'Localização geográfica da turbina no formato GeoJSON',
    })
    @IsDefined({ message: 'As coordenadas são obrigatórias' })
    @IsObject({ message: 'As coordenadas devem ser um objeto válido' })
    @ValidateNested()
    @Type(() => PointCoordinatesDto)
    coordinates: PointCoordinatesDto;

    @ApiProperty({
        description: "ID da simulacão a qual a turbina pertence",
        example: 1
    })
    @IsNumber({}, { message: "O ID da simulação deve ser um número." })
    simulation_id: number;

    @ApiProperty({
        description: "ID do catálogo de turbina ao qual a turbina pertence",
        example: 1
    })
    @IsNumber({}, { message: "O ID do catálogo de turbina deve ser um número." })
    @IsNotEmpty({ message: "O ID do catálogo de turbina não pode ser vazio." })
    turbine_catalog_id: number;
}
