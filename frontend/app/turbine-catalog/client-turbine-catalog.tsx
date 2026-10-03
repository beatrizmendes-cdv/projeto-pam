"use client";

import { Card } from "../components/Card";
import { useTurbineCatalog } from "@/hooks/use-turbine-catalog";
import { Controller, useForm, useWatch } from "react-hook-form"
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
import { TurbineCatalogFormValues } from "../forms/turbine-catalog/schema";
import { formatTurbineCatalogPayload } from "../forms/turbine-catalog/format-payload";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import CreateEditTurbineCatalogForm from "../forms/turbine-catalog/create-edit-turbine-catalog-form";

type SearchForm = {
    search: string;
}
export default function ClientTurbineCatalog() {
    const { data: catalog = [], isPending, isError, refetch, createTurbineCatalog, isCreating } = useTurbineCatalog();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" })
    const term = search.trim().toLocaleLowerCase("pt-BR")
    const filteredCatalog = (catalog.filter((model) => {
        const name = model.name.toLocaleLowerCase("pt-BR");
        const manufacture = model.manufacturer.toLocaleLowerCase("pt-BR");

        return name.includes(term) || manufacture.includes(term);
    }));

    const handleCreateSubmit = async (values: TurbineCatalogFormValues) => {
        try {
            const payload = formatTurbineCatalogPayload(values);
            await createTurbineCatalog(payload);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Erro ao criar modelo no catálogo:", error);
        }
    };

    return (
        <Box>
            <h1 className="text-2xl font-bold text-[#044947]">Catálogo de turbinas</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1 ">
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
                    <Button variant="contained" onClick={() => setIsModalOpen(true)}>+ Cadastrar Modelo</Button>
                </Box>
            </Box>

            <Box>
                {isPending ? (
                    <Box role="status" className="flex items-center gap-3 p6 ">
                        <CircularProgress size={24} />
                        <p>Carregando Catalogo...</p>
                    </Box>
                ) : isError ? (
                    <Alert severity="error" action={<Button color="inherit" onClick={() => refetch}> Tentar novamente</Button>}>
                        Não Foi possivel carregar o catálogo.
                    </Alert>
                ) : (
                    <Box className="overflow-hidden bg-white rounded-xl border border-gray-200 mt-5">
                        <TableContainer>
                            <Table aria-label="Catálogo de turbinas"
                                className="min-w-175"
                            >
                                <TableHead>
                                    <TableRow className="bg-slate-50">
                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Nome da turbina
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Data de criação
                                            </span>
                                        </TableCell>

                                        <TableCell >
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Potência
                                            </span>
                                        </TableCell>

                                        <TableCell >
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Diâmetro
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="text-xs font-semibold font-sans uppercase text-gray-400">
                                                Fabricante
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {filteredCatalog.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={5} align="center">
                                                <p className="py-6 text-slate-500">
                                                    {catalog.length === 0
                                                        ? "Nenhum modelo cadastrado."
                                                        : "Nenhum modelo encontrado para essa busca."}
                                                </p>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        filteredCatalog.map((model) => (
                                            <TableRow key={model.id} hover>
                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">
                                                        {model.name}
                                                    </span>
                                                </TableCell>

                                                <TableCell>
                                                    <span className="font-mono text-xs text-gray-600">
                                                        {model.created_at.slice(0, 10)}
                                                    </span>
                                                </TableCell>

                                                <TableCell >
                                                    <span className="font-semibold font-sans text-[#044947] ">
                                                        {model.nominal_power} MW
                                                    </span>
                                                </TableCell>

                                                <TableCell >
                                                    <span className="font-semibold font-sans text-[#044947]">
                                                        {model.rotor_diameter} M
                                                    </span>
                                                </TableCell>

                                                <TableCell>
                                                    <span className="font-semibold font-sans text-[#044947]">
                                                        {model.manufacturer}
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
            <Dialog open={isModalOpen} aria-labelledby="create-catalog-title" onClose={() => setIsModalOpen(false)}>
                <DialogTitle id="create-catalog-title">
                    Cadastre um novo modelo de turbina
                    <IconButton  aria-label="Fechar" onClick={() => setIsModalOpen(false)} disabled={isCreating} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Box>
                        <CreateEditTurbineCatalogForm onSubmit={handleCreateSubmit} isLoading={isCreating} />
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
