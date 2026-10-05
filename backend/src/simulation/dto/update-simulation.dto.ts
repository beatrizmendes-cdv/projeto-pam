import { PartialType } from "@nestjs/swagger";
import { CreateSimulationDto } from "./create-simulation.dto.js";

export class UpdateSimulationDto extends PartialType(CreateSimulationDto, { skipNullProperties: false }) {}