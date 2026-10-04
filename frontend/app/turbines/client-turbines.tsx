"use client";

import { useTurbine } from "@/hooks/use-turbine";
import { Card } from "../components/Card";
import { Controller, useForm, useWatch } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useTurbineCatalog, } from "@/hooks/use-turbine-catalog";
import { formatTurbinePayload } from "../forms/turbines/format-payload";
import { TurbineFormValues } from "../forms/turbines/schema";
import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import CreateEditTurbineForm from "../forms/turbines/create-edit-turbine-form";
import CloseIcon from "@mui/icons-material/Close";

type SearchForm = {
    search: string;
}

export default function ClientTurbines() {
    const { data: turbines = [], isPending, isError, refetch, createTurbine, isCreating } = useTurbine();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" })
    const term = search.trim().toLocaleLowerCase("pt-BR")
    const { data: catalog = [] } = useTurbineCatalog();
    const filteredTurbines = (turbines.filter((turbine) => {
        const name = turbine.name.toLocaleLowerCase("pt-BR");
        return name.includes(term);
    }));

    // for (let i = 0; i < turbines.length; i++) {
    //     console.log(turbines[i])
    // }

    const handleCreateSubmit = async (values: TurbineFormValues) => {
        try {
            const payload = formatTurbinePayload(values)
            await createTurbine(payload)
            setIsModalOpen(false);
        } catch (error) {
            console.error("Erro ao criar a turbina:", error);
        }
    };


    return (
        <Box>
            <h1 className="text-2xl font-bold text-[#044947]">Turbinas</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1">
                Cadastre e gerencie todas turbinas.
            </p>
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
                    <Button variant="contained" onClick={() => setIsModalOpen(true)}>+ Adicionar Turbinas</Button>

                </Box>


            </Box>
            <Box>
                {isPending ? (
                    <Box role="status" className="flex items-center gap-3 p6 ">
                        <CircularProgress size={24} />
                        <p>Carregando turbinas...</p>
                    </Box>
                ) : isError ? (
                    <Alert severity="error" action={<Button color="inherit" onClick={() => refetch()}> Tentar novamente</Button>}>
                        Não Foi possivel carregar as turbinas.
                    </Alert>
                ) : (
                    <Box className=" overflow-hidden bg-white rounded-xl border border-gray-200 mt-5">
                        <TableContainer>
                            <Table aria-label="Turbinas" className="min-w-175">
                                <TableHead>
                                    <TableRow className="bg-slate-50">
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Nome da turbina
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Latitude
                                            </span>
                                        </TableCell>

                                        <TableCell >
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Longitude
                                            </span>
                                        </TableCell>

                                        <TableCell >
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Modelo de turbina
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {filteredTurbines.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} align="center">
                                                <p className="py-6 text-slate-500">
                                                    {turbines.length === 0
                                                        ? "Nenhum modelo cadastrado."
                                                        : "Nenhum modelo encontrado para essa busca."}
                                                </p>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredTurbines.map((turbine) => (
                                            <TableRow key={turbine.id} hover>
                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">
                                                        {turbine.name}
                                                    </span>
                                                </TableCell>

                                                <TableCell>
                                                    <span className="font-mono text-xs text-gray-600">
                                                        {turbine.coordinates.coordinates[0]}
                                                    </span>
                                                </TableCell>

                                                <TableCell >
                                                    <span className="font-mono text-xs text-gray-600">
                                                        {turbine.coordinates.coordinates[1]}
                                                    </span>
                                                </TableCell>

                                                <TableCell >
                                                    <span className="font-semibold font-sans text-[#044947]">
                                                        {catalog.find((item) => item.id === turbine.turbine_catalog_id)?.name || "Não encontrado"}
                                                    </span>
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
            <Dialog open={isModalOpen} onClose={() => { if (!isCreating) setIsModalOpen(false); }} aria-labelledby="create-turbine-title">
    <DialogTitle id="create-turbine-title">
        Cadastre uma nova turbina
        <IconButton onClick={() => setIsModalOpen(false)} disabled={isCreating} size="small" aria-label="Fechar modal">
            <CloseIcon />
        </IconButton>
    </DialogTitle>
    <DialogContent className="turbine-dialog-content">
        <CreateEditTurbineForm onSubmit={handleCreateSubmit} isLoading={isCreating} />
    </DialogContent>
</Dialog>
        </Box>
    );
}
