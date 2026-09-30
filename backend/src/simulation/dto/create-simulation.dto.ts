import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSimulationDto {
    @ApiProperty({
        type: String,
        description: "Nome da simulacao",
        example: "Simulacao 1"
    })
    @IsString({ message: "O nome da simulacao deve ser um texto." })
    @IsNotEmpty({ message: "O nome da simulacao não pode ser vazio." })
    name: string;
}
