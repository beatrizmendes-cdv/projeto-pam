"use client";

import { Card } from "../components/Card";
import { useTurbineCatalog } from "@/hooks/use-turbine-catalog";
import { Controller, useForm, useWatch } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import type { TurbineCatalogFormValues } from "../forms/turbine-catalog/schema";
import { formatTurbineCatalogPayload } from "../forms/turbine-catalog/format-payload";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import CreateEditTurbineCatalogForm from "../forms/turbine-catalog/create-edit-turbine-catalog-form";
import DialogActions from "@mui/material/DialogActions";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import { isAxiosError } from "axios";
import type { ResponseTurbineCatalogDto } from "@/clients/projeto-pam";

type SearchForm = {
    search: string;
};

function getErrorMessage(error: unknown): string {
    if (isAxiosError<{ message?: string | string[] }>(error)) {
        const message = error.response?.data?.message;

        if (typeof message === "string") return message;
        if (Array.isArray(message)) return message.join(" ");
    }

    return "Não foi possível concluir a operação. Tente novamente.";
}

export default function ClientTurbineCatalog() {
    const { data: catalog = [], isPending, isError, refetch, createTurbineCatalog, isCreating, updateTurbineCatalog, isUpdating, deleteTurbineCatalog, isDeleting } = useTurbineCatalog();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingModel, setEditingModel] = useState<ResponseTurbineCatalogDto | null>(null);
    const [modelToDelete, setModelToDelete] = useState<ResponseTurbineCatalogDto | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const isSaving = isCreating || isUpdating;
    const isBusy = isSaving || isDeleting;

    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" });
    const term = search.trim().toLocaleLowerCase("pt-BR");

    const filteredCatalog = catalog.filter((model) => {
        const name = model.name.toLocaleLowerCase("pt-BR");
        const manufacture = model.manufacturer.toLocaleLowerCase("pt-BR");

        return name.includes(term) || manufacture.includes(term);
    });

    const openCreateModal = () => {
        setEditingModel(null);
        setFormError(null);
        setIsModalOpen(true);
    };

    const openEditModal = (model: ResponseTurbineCatalogDto) => {
        setEditingModel(model);
        setFormError(null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        if (!isSaving) setIsModalOpen(false);
    };

    const openDeleteModal = (model: ResponseTurbineCatalogDto) => {
        setDeleteError(null);
        setModelToDelete(model);
    };

    const closeDeleteModal = () => {
        if (!isDeleting) setModelToDelete(null);
    };

    const handleSubmit = async (values: TurbineCatalogFormValues) => {
        if (isSaving) return;

        setFormError(null);

        try {
            const payload = formatTurbineCatalogPayload(values);

            if (editingModel) {
                await updateTurbineCatalog({ id: editingModel.id, payload });
            } else {
                await createTurbineCatalog(payload);
            }

            setIsModalOpen(false);
        } catch (error) {
            setFormError(getErrorMessage(error));
        }
    };

    const handleDelete = async () => {
        if (!modelToDelete || isDeleting) return;

        setDeleteError(null);

        try {
            await deleteTurbineCatalog(modelToDelete.id);
            setModelToDelete(null);
        } catch (error) {
            setDeleteError(getErrorMessage(error));
        }
    };

    return (
        <Box>
            <h1 className="text-2xl font-bold text-[#044947]">Catálogo de turbinas</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1">
                Cadastre e gerencie todos os modelos de turbinas
            </p>
            <Box className="pt-2 w-82">
                <Card label="Total:" unit="modelos de turbina" value={isPending || isError ? "-" : catalog.length} />
            </Box>

            <Box className="mt-5 border border-gray-200 p-3 bg-white rounded-xl">
                <Box className="flex justify-between">
                    <Box className="w-full max-w-md">
                        <Controller name="search" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} inputRef={ref} label="Procurar no catálogo de turbinas..." placeholder="Nome ou fabricante" size="small" fullWidth />
                        )} />
                    </Box>
                    <Button variant="contained" onClick={openCreateModal} disabled={isBusy}>+ Cadastrar Modelo</Button>
                </Box>
            </Box>

            <Box>
                {isPending ? (
                    <Box role="status" className="flex items-center gap-3 p-6">
                        <CircularProgress size={24} />
                        <p>Carregando Catálogo...</p>
                    </Box>
                ) : isError ? (
                    <Alert severity="error" action={<Button color="inherit" onClick={() => void refetch()}>Tentar novamente</Button>}>
                        Não foi possível carregar o catálogo.
                    </Alert>
                ) : (
                    <Box className="overflow-hidden bg-white rounded-xl border border-gray-200 mt-5">
                        <TableContainer>
                            <Table aria-label="Catálogo de turbinas" className="min-w-175">
                                <TableHead>
                                    <TableRow className="bg-slate-50">
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">Nome da turbina</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">Data de criação</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">Potência</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">Diâmetro</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">Fabricante</span>
                                        </TableCell>
                                        <TableCell align="right">
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">Ações</span>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {filteredCatalog.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} align="center">
                                                <p className="py-6 text-slate-500">
                                                    {catalog.length === 0 ? "Nenhum modelo cadastrado." : "Nenhum modelo encontrado para essa busca."}
                                                </p>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredCatalog.map((model) => (
                                            <TableRow key={model.id} hover>
                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">{model.name}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="font-mono text-xs text-gray-600">{model.created_at.slice(0, 10)}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">{model.nominal_power} MW</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">{model.rotor_diameter} m</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">{model.manufacturer}</span>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Box className="flex justify-end gap-1">
                                                        <IconButton size="small" title="Editar modelo" aria-label={`Editar ${model.name}`} disabled={isBusy} onClick={() => openEditModal(model)} sx={{ color: "#94A3B8", "&:hover": { color: "#044947" } }}>
                                                            <EditOutlinedIcon fontSize="small" />
                                                        </IconButton>
                                                        <IconButton size="small" title="Excluir modelo" aria-label={`Excluir ${model.name}`} disabled={isBusy} onClick={() => openDeleteModal(model)} sx={{ color: "#94A3B8", "&:hover": { color: "#C62828" } }}>
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
            </Box>

            <Dialog open={isModalOpen} aria-labelledby="create-catalog-title" onClose={closeModal}>
                <DialogTitle id="create-catalog-title">
                    {editingModel ? "Editar modelo de turbina" : "Cadastre um novo modelo de turbina"}
                    <IconButton aria-label="Fechar" onClick={closeModal} disabled={isSaving}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {formError && <Alert severity="error" className="mx-6 mt-4">{formError}</Alert>}
                    <Box>
                        {isModalOpen && (
                            <CreateEditTurbineCatalogForm key={editingModel?.id ?? "create"} initialValues={editingModel ? { name: editingModel.name, manufacturer: editingModel.manufacturer, nominalPower: String(editingModel.nominal_power), rotorDiameter: String(editingModel.rotor_diameter) } : undefined} onSubmit={handleSubmit} isLoading={isSaving} isEditing={editingModel !== null} />
                        )}
                    </Box>
                </DialogContent>
            </Dialog>

            <Dialog open={modelToDelete !== null} aria-labelledby="delete-catalog-title" aria-describedby="delete-catalog-description" onClose={closeDeleteModal} maxWidth="xs">
                <DialogTitle id="delete-catalog-title">
                    Excluir modelo
                    <IconButton aria-label="Fechar confirmação" onClick={closeDeleteModal} disabled={isDeleting}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box className="modal-form-body">
                        <p id="delete-catalog-description" className="m-0 text-sm leading-6 text-[#64748B]">
                            Deseja excluir o modelo <strong className="text-[#044947]">{modelToDelete?.name}</strong>? Esta ação não pode ser desfeita.
                        </p>
                        {deleteError && <Alert severity="error">{deleteError}</Alert>}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ borderTop: "1px solid #E1ECEE", padding: "16px 24px", gap: 1 }}>
                    <Button variant="outlined" onClick={closeDeleteModal} disabled={isDeleting} autoFocus>Cancelar</Button>
                    <Button variant="contained" color="error" onClick={handleDelete} disabled={isDeleting}>
                        {isDeleting ? <CircularProgress size={20} color="inherit" /> : "Excluir"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}