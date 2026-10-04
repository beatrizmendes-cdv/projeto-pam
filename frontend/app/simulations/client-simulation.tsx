"use client";

import { useState } from "react";
import { isAxiosError } from "axios";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Alert, Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSimulation } from "@/hooks/use-simulation";
import { useTurbine } from "@/hooks/use-turbine";
import { Card } from "../components/Card";
import SimulationBox from "../components/SimulationBox";
import CreateEditSimulationForm from "../forms/simulation/create-edit-simulation-form";
import { formatSimulationPayload } from "../forms/simulation/format-payload";
import type { SimulationFormValues } from "../forms/simulation/schema";

type SearchForm = {
    search: string;
};

export default function ClientSimulation() {
    const { data: simulation = [], isPending, isError, refetch, createSimulation, isCreating } = useSimulation();
    const { data: turbines = [], isPending: isTurbinesLoading, isError: isTurbinesError, refetch: refetchTurbines } = useTurbine();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" });
    const term = search.trim().toLocaleLowerCase("pt-BR");
    const filteredSimulation = simulation.filter((item) => item.name.toLocaleLowerCase("pt-BR").includes(term));

    const openModal = () => {
        setSubmitError(null);
        setIsModalOpen(true);
        void refetchTurbines();
    };

    const closeModal = () => {
        if (!isCreating) setIsModalOpen(false);
    };

    const handleCreateSubmit = async (values: SimulationFormValues) => {
        setSubmitError(null);

        try {
            await createSimulation(formatSimulationPayload(values));
            setIsModalOpen(false);
        } catch (error) {
            let message = "Não foi possível criar a simulação.";

            if (isAxiosError<{ message?: string | string[] }>(error)) {
                const apiMessage = error.response?.data?.message;

                if (typeof apiMessage === "string") message = apiMessage;
                if (Array.isArray(apiMessage)) message = apiMessage.join(" ");
            }

            setSubmitError(message);
            void refetchTurbines();
        }
    };

    return (
        <Box>
            <h1 className="text-2xl font-bold text-[#044947]">Simulações</h1>
            <p className="pb-4 pt-1 font-light text-[#64748B]">Cadastre e gerencie todas as simulações.</p>

            <Box className="w-full max-w-82 pt-2">
                <Card label="Total:" unit="simulações" value={isPending || isError ? "-" : simulation.length} />
            </Box>

            <Box className="mt-5 rounded-xl border border-gray-200 bg-white p-3">
    <Box className="flex w-full flex-wrap items-center justify-between gap-4">
        <Box className="min-w-0 flex-1 basis-60 max-w-md">
            <Controller name="search" control={control} render={({ field: { ref, ...field } }) => (
                <TextField {...field} inputRef={ref} label="Procurar simulação..." placeholder="Nome da simulação" size="small" fullWidth />
            )} />
        </Box>
        <Box className="ml-auto shrink-0">
            <Button onClick={openModal}>+ Adicionar Simulação</Button>
        </Box>
    </Box>
</Box>

            {isPending || isTurbinesLoading ? (
                <Box role="status" className="flex items-center gap-3 p-6 text-[#64748B]">
                    <CircularProgress size={24} />
                    <p>Carregando simulações...</p>
                </Box>
            ) : isError || isTurbinesError ? (
                <Alert className="mt-4" severity="error" action={<Button color="inherit" variant="text" onClick={() => { void refetch(); void refetchTurbines(); }}>Tentar novamente</Button>}>
                    Não foi possível carregar as simulações e suas turbinas.
                </Alert>
            ) : filteredSimulation.length === 0 ? (
                <p className="mt-6 text-[#64748B]">{simulation.length === 0 ? "Nenhuma simulação cadastrada." : "Nenhuma simulação encontrada para essa busca."}</p>
            ) : (
                <Box className="mt-4 grid gap-4" sx={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))" }}>
                    {filteredSimulation.map((item) => (
                        <SimulationBox key={item.id} name={item.name} total={turbines.filter((turbine) => turbine.simulation_id === item.id).length} date="" />
                    ))}
                </Box>
            )}

            <Dialog open={isModalOpen} onClose={closeModal} aria-labelledby="create-simulation-title">
                <DialogTitle id="create-simulation-title">
                    Crie uma nova simulação
                    <IconButton onClick={closeModal} disabled={isCreating} size="small" aria-label="Fechar modal">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="turbine-dialog-content">
                    {isModalOpen && <CreateEditSimulationForm onSubmit={handleCreateSubmit} isLoading={isCreating} submitError={submitError} />}
                </DialogContent>
            </Dialog>
        </Box>
    );
}