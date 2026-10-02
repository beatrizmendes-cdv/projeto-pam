import { CreateTurbineCatalogDto } from "@/clients/projeto-pam";
import { TurbineCatalogFormValues } from "./schema";

export function formatTurbineCatalogPayload(values: TurbineCatalogFormValues): CreateTurbineCatalogDto {
    return {
        name: values.name.trim(),
        manufacturer: values.manufacturer.trim(),
        nominal_power: values.nominalPower,
        rotor_diameter: values.rotorDiameter,

    };
}