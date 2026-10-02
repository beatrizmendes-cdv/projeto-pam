import z from "zod";

export const simulationSchema = z.object({
    name: z.string().trim().min(1, { message: "O nome da simulação é obrigatório." }),
    description: z.string().trim().min(1, { message: "A descrição da simulação é obrigatória." }),
    turbineId: z.number({ message: "A turbina da simulação é obrigatória." }).min(1, "Selecione uma turbina"),
});

export type SimulationFormInput = z.input<typeof simulationSchema>;
export type SimulationFormValues = z.output<typeof simulationSchema>;