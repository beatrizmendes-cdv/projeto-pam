import { z } from "zod";
export const turbineCatalogSchema = z.object({
    name: z.string().min(1, { message: "O nome do modelo é obrigatório" }),
    manufacturer: z.string().min(1, { message: "O fabricante do modelo é obrigatório" }),
    nominalPower: z.string().min(1, { message: "A potência nominal do modelo é obrigatória" }).refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Insira uma potência válida maior que zero").transform((val) => Number(val)),
    rotorDiameter: z.string().min(1, { message: "O diâmetro do rotor do modelo é obrigatório" }).refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Insira um diâmetro válido maior que zero").transform((val) => Number(val)),
});

export type TurbineCatalogFormValues = z.output<typeof turbineCatalogSchema>;
export type TurbineCatalogFormInput = z.input<typeof turbineCatalogSchema>;