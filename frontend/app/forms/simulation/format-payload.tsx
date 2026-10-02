import { SimulationFormValues } from "./schema";

export function formatTurbineCatalogPayload(values: SimulationFormValues): CreateTurbineCatalogDto {
    return {
        name: values.name.trim(),
        description: values.description.trim(),
        turbineId: values.turbineId,
    };
}