import { CreateTurbineDto } from "@/clients/projeto-pam";
import { TurbineFormValues } from "./schema";

export function formatTurbinePayload(values: TurbineFormValues): CreateTurbineDto {
    return {
        name: values.name.trim(),
        coordinates: {
            type: "Point",
            coordinates: [values.longitude, values.latitude]
        },
        turbine_catalog_id: values.turbineCatalogId,
        simulation_id: (values as any).simulationId ?? null,

    };
}