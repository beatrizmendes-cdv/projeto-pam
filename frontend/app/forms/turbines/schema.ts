import z from "zod";
const regexDecimal = /^-?\d+(\.\d{1,6})?$/;
export const turbineSchema = z.object({
    name: z.string().trim().min(1, { message: "O nome da turbina é obrigatório." }),
    latitude: z
        .string()
        .trim()
        .min(1, { message: "A latitude da turbina é obrigatória." })
        .regex(regexDecimal, { message: "A latitude deve ter no maximo 6 casas decimais." })
        .refine((val) => !isNaN(Number(val)), { message: "Latitude inválida." })
        .transform((val) => Number(val))
        .pipe(z.number().min(-34, { message: "A latitude do Brasil deve ser maior ou igual a -34." }).max(6, { message: "A latitude do Brasil deve ser menor ou igual a 6" })
        ),
    longitude: z
        .string()
        .trim()
        .min(1, { message: "A longitude da turbina é obrigatória." })
        .regex(regexDecimal, { message: "A longitude deve ter no maximo 6 casas decimais." })
        .refine((val) => !isNaN(Number(val)), "Longitude inválida")
        .transform((val) => Number(val))
        .pipe(z.number().min(-74, { message: "A longitude do Brasil deve ser maior ou igual a -74." }).max(-34, { message: "A longitude no Brasil deve ser menor ou igual a -34" })),

    turbineCatalogId: z.number({ message: "O modelo da turbina é obrigatório." }).min(1, "Selecione um modelo de catálogo"),
});

export type TurbineFormInput = z.input<typeof turbineSchema>;
export type TurbineFormValues = z.output<typeof turbineSchema>;
