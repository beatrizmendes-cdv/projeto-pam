import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer/types/decorators/index.js";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSimulationDto {
    @ApiProperty({
        description: "Nome da simulacao",
        example: "Simulacao 1"
    })
    @IsString({ message: "O nome da simulacao deve ser um texto." })
    @IsNotEmpty({ message: "O nome da simulacao não pode ser vazio." })
    name: string;
}
