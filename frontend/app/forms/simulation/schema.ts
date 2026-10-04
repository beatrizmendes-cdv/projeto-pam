import z from "zod";

export const simulationSchema = z.object({
    name: z.string().trim().min(1, { message: "O nome da simulação é obrigatório." }),
    turbineIds: z.array(z.number().int().positive()).min(1, "Selecione pelo menos uma turbina."),
});

export type SimulationFormInput = z.input<typeof simulationSchema>;
export type SimulationFormValues = z.output<typeof simulationSchema>;