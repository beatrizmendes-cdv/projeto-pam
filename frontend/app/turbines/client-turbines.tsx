"use client";

import { useState } from "react";
import { isAxiosError } from "axios";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import type { ResponseTurbineDto } from "@/clients/projeto-pam";
import { useTurbine } from "@/hooks/use-turbine";
import { useTurbineCatalog } from "@/hooks/use-turbine-catalog";
import { Card } from "../components/Card";
import CreateEditTurbineForm from "../forms/turbines/create-edit-turbine-form";
import { formatTurbinePayload } from "../forms/turbines/format-payload";
import type { TurbineFormValues } from "../forms/turbines/schema";

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

export default function ClientTurbines() {
    const { data: turbines = [], isPending, isError, refetch, createTurbine, updateTurbine, deleteTurbine, isCreating, isUpdating, isDeleting } = useTurbine();
    const { data: catalog = [] } = useTurbineCatalog();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTurbine, setEditingTurbine] = useState<ResponseTurbineDto | null>(null);
    const [turbineToDelete, setTurbineToDelete] = useState<ResponseTurbineDto | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const isSaving = isCreating || isUpdating;
    const isBusy = isSaving || isDeleting;

    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" });
    const term = search.trim().toLocaleLowerCase("pt-BR");
    const filteredTurbines = turbines.filter((turbine) => turbine.name.toLocaleLowerCase("pt-BR").includes(term));

    const openCreateModal = () => {
        setEditingTurbine(null);
        setFormError(null);
        setIsModalOpen(true);
    };

    const openEditModal = (turbine: ResponseTurbineDto) => {
        setEditingTurbine(turbine);
        setFormError(null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        if (!isSaving) setIsModalOpen(false);
    };

    const openDeleteModal = (turbine: ResponseTurbineDto) => {
        setDeleteError(null);
        setTurbineToDelete(turbine);
    };

    const closeDeleteModal = () => {
        if (!isDeleting) setTurbineToDelete(null);
    };

    const handleSubmit = async (values: TurbineFormValues) => {
        if (isSaving) return;

        setFormError(null);

        try {
            const payload = formatTurbinePayload(values);

            if (editingTurbine) {
                await updateTurbine({ id: editingTurbine.id, payload });
            } else {
                await createTurbine(payload);
            }

            setIsModalOpen(false);
        } catch (error) {
            setFormError(getErrorMessage(error));
        }
    };

    const handleDelete = async () => {
        if (!turbineToDelete || isDeleting) return;

        setDeleteError(null);

        try {
            await deleteTurbine(turbineToDelete.id);
            setTurbineToDelete(null);
        } catch (error) {
            setDeleteError(getErrorMessage(error));
        }
    };

    return (
        <Box>
            <h1 className="text-2xl font-bold text-[#044947]">Turbinas</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1">Cadastre e gerencie todas as turbinas.</p>

            <Box className="pt-2 w-82">
                <Card label="Total:" unit="turbinas" value={isPending || isError ? "-" : turbines.length} />
            </Box>

            <Box className="mt-5 border border-gray-200 p-3 bg-white rounded-xl">
                <Box className="flex justify-between">
                    <Box className="w-full max-w-md">
                        <Controller name="search" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} inputRef={ref} color="success" label="Procurar turbina..." placeholder="Nome da turbina" size="small" fullWidth />
                        )} />
                    </Box>
                    <Button onClick={openCreateModal} disabled={isBusy}>+ Adicionar Turbinas</Button>
                </Box>
            </Box>

            {isPending ? (
                <Box role="status" className="flex items-center gap-3 p-6">
                    <CircularProgress size={24} />
                    <p>Carregando turbinas...</p>
                </Box>
            ) : isError ? (
                <Alert severity="error" action={<Button color="inherit" onClick={() => void refetch()}>Tentar novamente</Button>}>
                    Não foi possível carregar as turbinas.
                </Alert>
            ) : (
                <Box className="overflow-hidden bg-white rounded-xl border border-gray-200 mt-5">
                    <TableContainer>
                        <Table aria-label="Turbinas" className="min-w-175">
                            <TableHead>
                                <TableRow className="bg-slate-50">
                                    <TableCell><span className="text-xs font-semibold uppercase text-gray-400">Nome da turbina</span></TableCell>
                                    <TableCell><span className="text-xs font-semibold uppercase text-gray-400">Latitude</span></TableCell>
                                    <TableCell><span className="text-xs font-semibold uppercase text-gray-400">Longitude</span></TableCell>
                                    <TableCell><span className="text-xs font-semibold uppercase text-gray-400">Modelo de turbina</span></TableCell>
                                    <TableCell align="right"><span className="text-xs font-semibold uppercase text-gray-400"></span></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredTurbines.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">
                                            <p className="py-6 text-slate-500">{turbines.length === 0 ? "Nenhuma turbina cadastrada." : "Nenhuma turbina encontrada para essa busca."}</p>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredTurbines.map((turbine) => (
                                        <TableRow key={turbine.id} hover>
                                            <TableCell><span className="font-semibold text-[#044947]">{turbine.name}</span></TableCell>
                                            <TableCell><span className="font-mono text-xs text-gray-600">{turbine.coordinates.coordinates[1]}</span></TableCell>
                                            <TableCell><span className="font-mono text-xs text-gray-600">{turbine.coordinates.coordinates[0]}</span></TableCell>
                                            <TableCell><span className="font-semibold text-[#044947]">{catalog.find((item) => item.id === turbine.turbine_catalog_id)?.name || "Não encontrado"}</span></TableCell>
                                            <TableCell align="right">
                                                <Box className="flex justify-end gap-1">
                                                    <IconButton size="small" title="Editar turbina" aria-label={`Editar ${turbine.name}`} disabled={isBusy} onClick={() => openEditModal(turbine)} sx={{ color: "#94A3B8" }}>
                                                        <EditOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton size="small" title="Excluir turbina" aria-label={`Excluir ${turbine.name}`} disabled={isBusy} onClick={() => openDeleteModal(turbine)} sx={{ color: "#94A3B8", "&:hover": { color: "#C62828" } }}>
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}

            <Dialog open={isModalOpen} onClose={closeModal} aria-labelledby="turbine-form-title">
                <DialogTitle id="turbine-form-title">
                    {editingTurbine ? "Editar turbina" : "Cadastre uma nova turbina"}
                    <IconButton onClick={closeModal} disabled={isSaving} size="small" aria-label="Fechar formulário">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="turbine-dialog-content">
                    {formError && <Alert severity="error" className="mx-6 mt-4">{formError}</Alert>}
                    {isModalOpen && (
                        <CreateEditTurbineForm key={editingTurbine?.id ?? "create"} initialValues={editingTurbine ? { name: editingTurbine.name, latitude: String(editingTurbine.coordinates.coordinates[1]), longitude: String(editingTurbine.coordinates.coordinates[0]), turbineCatalogId: editingTurbine.turbine_catalog_id } : undefined} onSubmit={handleSubmit} isLoading={isSaving} isEditing={editingTurbine !== null} />
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={turbineToDelete !== null} onClose={closeDeleteModal} maxWidth="xs" aria-labelledby="delete-turbine-title" aria-describedby="delete-turbine-description">
                <DialogTitle id="delete-turbine-title">
                    Excluir turbina
                    <IconButton onClick={closeDeleteModal} disabled={isDeleting} size="small" aria-label="Fechar confirmação">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box className="modal-form-body">
                        <p id="delete-turbine-description" className="text-sm leading-6 text-[#64748B]">Excluir <strong>{turbineToDelete?.name}</strong>? Esta ação não pode ser desfeita.</p>
                        {turbineToDelete && turbineToDelete.simulation_id !== null && <Alert severity="warning">Esta turbina também deixará de fazer parte da simulação à qual está vinculada.</Alert>}
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