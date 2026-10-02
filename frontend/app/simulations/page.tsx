"use client";
import { useSimulation } from "@/hooks/use-simulation";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Card } from "../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import SimulationBox from "../components/SimulationBox";
import Button from "@mui/material/Button";

type SeachForm = {
    search: string;
}
export default function Simulation() {
    const { data: simulation = [], isPending, isError, refetch } = useSimulation();
    const { control } = useForm<SeachForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" })
    const term = search.trim().toLocaleLowerCase("pt-BR")
    const filteredSimulation = (simulation.filter((model) => {
        const name = model.name.toLocaleLowerCase("pt-BR");
        return name.includes(term);
    }));

    return (
        <div>
            <h1 className="text-2xl font-bold text-[#044947]">Simulações</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1 ">
                Cadastre e gerencie todos as simulações.
            </p>
            <div className="pt-2 w-82">
                <Card label="Total:" unit="simulações" value={isPending || isError ? "-" : simulation.length} />
            </div>
            <div className="mt-5 border border-gray-200 p-3 rounded-xl bg-white">
                <div className="flex justify-between ">
                    <div className="w-full max-w-md ">
                        <Controller name="search" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} inputRef={ref} label="Procurar simulação..." placeholder="Nome da simulação" size="small" fullWidth />
                        )} />
                    </div>
                    <Button variant="contained">+ Adicionar Simulação</Button>
                </div>
            </div>
            <SimulationBox name="Simulação 1" date="01-01-2023" total={15} />



        </div>
    );
}
