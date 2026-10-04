import { SimulationFormValues } from "./schema";
import { CreateSimulationDto } from "@/clients/projeto-pam";

export function formatSimulationPayload(values: SimulationFormValues): CreateSimulationDto {
    return {
        name: values.name.trim(),
        turbine_ids: values.turbineIds,
    };
}