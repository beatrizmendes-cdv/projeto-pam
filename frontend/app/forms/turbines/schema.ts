import z from "zod";

export const turbineSchema = z.object({
    name: z.string().trim().min(1, { message: "O nome da turbina é obrigatório." }),
    latitude: z.string().trim().min(1, { message: "A latitude da turbina é obrigatória." }).refine((val) => !isNaN(Number(val)), "Latitude inválida").transform((val) => Number(val)),
    longitude: z.string().trim().min(1, { message: "A longitude da turbina é obrigatória." }).refine((val) => !isNaN(Number(val)), "Longitude inválida").transform((val) => Number(val)),
    turbineCatalogId: z.number({ message: "O modelo da turbina é obrigatório." }).min(1, "Selecione um modelo de catálogo"),
});

export type TurbineFormInput = z.input<typeof turbineSchema>;
export type TurbineFormValues = z.output<typeof turbineSchema>;
