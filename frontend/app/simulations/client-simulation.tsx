"use client";

import { useState } from "react";
import { isAxiosError } from "axios";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ResponseSimulationDto } from "@/clients/projeto-pam";
import { useSimulation } from "@/hooks/use-simulation";
import { useTurbine } from "@/hooks/use-turbine";
import { Card } from "../components/Card";
import SimulationBox from "../components/SimulationBox";
import CreateEditSimulationForm from "../forms/simulation/create-edit-simulation-form";
import { formatSimulationPayload } from "../forms/simulation/format-payload";
import type { SimulationFormInput, SimulationFormValues } from "../forms/simulation/schema";

type SearchForm = {
    search: string;
};

function getErrorMessage(error: unknown): string {
    if (isAxiosError<{ message?: string | string[] }>(error)) {
        const message = error.response?.data?.message;
        if (typeof message === "string") return message;
        if (Array.isArray(message)) return message.join(" ");
    }

    return "Não foi possível concluir a operação.";
}

export default function ClientSimulation() {
    const { data: simulation = [], isPending, isError, refetch, createSimulation, updateSimulation, deleteSimulation, isCreating, isUpdating, isDeleting } = useSimulation();
    const { data: turbines = [], isPending: isTurbinesLoading, isError: isTurbinesError, refetch: refetchTurbines } = useTurbine();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSimulation, setEditingSimulation] = useState<ResponseSimulationDto | null>(null);
    const [simulationToDelete, setSimulationToDelete] = useState<ResponseSimulationDto | null>(null);
    const [initialValues, setInitialValues] = useState<SimulationFormInput | undefined>(undefined);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const isSaving = isCreating || isUpdating;
    const isBusy = isSaving || isDeleting;

    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" });
    const term = search.trim().toLocaleLowerCase("pt-BR");
    const filteredSimulation = simulation.filter((item) => item.name.toLocaleLowerCase("pt-BR").includes(term));

    const openCreateModal = () => {
        setEditingSimulation(null);
        setInitialValues(undefined);
        setSubmitError(null);
        setIsModalOpen(true);
        void refetchTurbines();
    };

    const openEditModal = (item: ResponseSimulationDto) => {
        setEditingSimulation(item);
        setInitialValues({
            name: item.name,
            turbineIds: turbines.filter((turbine) => turbine.simulation_id === item.id).map((turbine) => turbine.id),
        });
        setSubmitError(null);
        setIsModalOpen(true);
        void refetchTurbines();
    };

    const closeModal = () => {
        if (!isSaving) setIsModalOpen(false);
    };

    const openDeleteModal = (item: ResponseSimulationDto) => {
        setDeleteError(null);
        setSimulationToDelete(item);
    };

    const closeDeleteModal = () => {
        if (!isDeleting) setSimulationToDelete(null);
    };

    const handleSubmit = async (values: SimulationFormValues) => {
        if (isSaving) return;

        setSubmitError(null);

        try {
            const payload = formatSimulationPayload(values);

            if (editingSimulation) {
                await updateSimulation({ id: editingSimulation.id, payload });
            } else {
                await createSimulation(payload);
            }

            setIsModalOpen(false);
        } catch (error) {
            setSubmitError(getErrorMessage(error));
            void refetchTurbines();
        }
    };

    const handleDelete = async () => {
        if (!simulationToDelete || isDeleting) return;

        setDeleteError(null);

        try {
            await deleteSimulation(simulationToDelete.id);
            setSimulationToDelete(null);
        } catch (error) {
            setDeleteError(getErrorMessage(error));
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
                        <Button onClick={openCreateModal} disabled={isBusy}>+ Adicionar Simulação</Button>
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
                        <SimulationBox key={item.id} name={item.name} total={turbines.filter((turbine) => turbine.simulation_id === item.id).length} date="" onEdit={() => openEditModal(item)} onDelete={() => openDeleteModal(item)} disabled={isBusy} />
                    ))}
                </Box>
            )}

            <Dialog open={isModalOpen} onClose={closeModal} aria-labelledby="simulation-form-title">
                <DialogTitle id="simulation-form-title">
                    {editingSimulation ? "Editar simulação" : "Crie uma nova simulação"}
                    <IconButton onClick={closeModal} disabled={isSaving} size="small" aria-label="Fechar formulário">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="turbine-dialog-content">
                    {isModalOpen && (
                        <CreateEditSimulationForm key={editingSimulation?.id ?? "create"} simulationId={editingSimulation?.id} initialValues={initialValues} onSubmit={handleSubmit} isLoading={isSaving} submitError={submitError} />
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={simulationToDelete !== null} onClose={closeDeleteModal} maxWidth="xs" aria-labelledby="delete-simulation-title" aria-describedby="delete-simulation-description">
                <DialogTitle id="delete-simulation-title">
                    Excluir simulação
                    <IconButton onClick={closeDeleteModal} disabled={isDeleting} size="small" aria-label="Fechar confirmação">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box className="modal-form-body">
                        <p id="delete-simulation-description" className="text-sm leading-6 text-[#64748B]">Excluir <strong>{simulationToDelete?.name}</strong>? As turbinas serão mantidas e ficarão livres para outra simulação.</p>
                        {deleteError && <Alert severity="error">{deleteError}</Alert>}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ borderTop: "1px solid #E1ECEE", padding: "16px 24px", gap: 1 }}>
                    <Button variant="outlined" onClick={closeDeleteModal} disabled={isDeleting} autoFocus>Cancelar</Button>
                    <Button color="error" onClick={handleDelete} disabled={isDeleting}>{isDeleting ? <CircularProgress size={20} color="inherit" /> : "Excluir"}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}