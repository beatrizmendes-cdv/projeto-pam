import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTurbineCatalogDto {
    @ApiProperty({
        type: String,
        description: "Nome do modelo de turbina",
        example: "Turbina X"
    })
    @IsString({ message: "O nome do modelo de turbina deve ser um texto." })
    @IsNotEmpty({ message: "O nome do modelo de turbina não pode ser vazio." })
    name: string;

    @ApiProperty({
        type:Number,
        description: "Potencia do modelo de turbina",
        example: 1000
    })
    @IsNumber({}, { message: "A potência da turbina deve ser um número." })
    @IsNotEmpty({ message: "A potência da turbina não pode ser vazia." })
    nominal_power: number;

    @ApiProperty({
        type:Number,
        description: "Diâmetro do rotor do modelo de turbina",
        example: 50
    })
    @IsNumber({}, { message: "O diâmetro do rotor da turbina deve ser um número." })
    @IsNotEmpty({ message: "O diâmetro do rotor da turbina não pode ser vazio." })
    rotor_diameter: number;

    @ApiProperty({
        type:String,
        description: "Fabricante do modelo de turbina",
        example: "Fabricante X"
    })
    @IsString({ message: "O fabricante da turbina deve ser um texto." })
    @IsNotEmpty({ message: "O fabricante da turbina não pode ser vazio." })
    manufacturer: string;
}
