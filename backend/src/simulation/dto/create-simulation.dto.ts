import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, ArrayUnique, IsArray, IsIn, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSimulationDto {
    @ApiProperty({
        type: String,
        description: "Nome da simulacao",
        example: "Simulacao 1"
    })
    @IsString({ message: "O nome da simulacao deve ser um texto." })
    @IsNotEmpty({ message: "O nome da simulacao não pode ser vazio." })
    name: string;


    @ApiProperty({ type: [Number], description: "id das turbinas"})
    @IsArray({ message: "As turbinas devem ser enviadas em uma lista." })
    @ArrayMinSize(1, { message: "Selecione pelo menos uma turbina." })
    @ArrayUnique({ message: "A lista não pode conter turbinas repetidas." })
    @IsInt({ each: true, message: "Cada ID de turbina deve ser um número inteiro." })
    turbine_ids:number[];
}
