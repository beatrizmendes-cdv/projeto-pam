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

type SearchForm = {
    search: string;
}
export default function TurbineCatalogPage() {
    const { data: catalog = [], isPending, isError, refetch } = useTurbineCatalog();
    const { control } = useForm<SearchForm>({ defaultValues: { search: "" } });
    const search = useWatch({ control, name: "search" })
    const term = search.trim().toLocaleLowerCase("pt-BR")
    const filteredCatalog = (catalog.filter((model) => {
        const name = model.name.toLocaleLowerCase("pt-BR");
        const manufacture = model.manufacturer.toLocaleLowerCase("pt-BR");

        return name.includes(term) || manufacture.includes(term);
    }));

    return (
        <div>
            <h1 className="text-2xl font-bold text-[#044947]">Catálogo de turbinas</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1 ">
                Cadastre e gerencie todos os modelos de turbinas
            </p>
            <div className="pt-2 w-82">
                <Card label="Total:" unit="modelos de turbina" value={isPending || isError ? "-" : catalog.length} />
            </div>

            <div className="mt-5 border border-gray-200 p-3 bg-white rounded-xl">
                <div className="w-full max-w-md">
                    <Controller name="search" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} label="Digite o modelo que voce quer buscar no catalogo..." placeholder="Nome ou fabricante" size="small" fullWidth />
                    )} />
                </div>
            </div>

            <div>
                {isPending ? (
                    <div role="status" className="flex items-center gap-3 p6 ">
                        <CircularProgress size={24} />
                        <p>Carregando Catalogo...</p>
                    </div>
                ) : isError ? (
                    <Alert severity="error" action={<Button color="inherit" onClick={() => refetch}> Tentar novamente</Button>}>
                        Não Foi possivel carregar o catálogo.
                    </Alert>
                ) : (
                    <div className="overflow-hidden bg-white rounded-xl border border-gray-200">
                        <TableContainer>
                            <Table aria-label="Catálogo de turbinas"
                                className="min-w-[700px]"
                            >
                                <TableHead>
                                    <TableRow className="bg-slate-50">
                                        <TableCell>
                                            <span className="text-xs font-semibold uppercase text-slate-500">
                                                Nome da turbina
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="text-xs font-semibold uppercase text-slate-500">
                                                Data de criação
                                            </span>
                                        </TableCell>

                                        <TableCell align="right">
                                            <span className="text-xs font-semibold uppercase text-slate-500">
                                                Potência
                                            </span>
                                        </TableCell>

                                        <TableCell align="right">
                                            <span className="text-xs font-semibold uppercase text-slate-500">
                                                Diâmetro
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span className="text-xs font-semibold uppercase text-slate-500">
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
                                                    <span className="font-semibold text-[#044947]">
                                                        {model.name}
                                                    </span>
                                                </TableCell>

                                                <TableCell>
                                                    <span className="font-mono text-xs text-slate-500">
                                                        {model.created_at.slice(0, 10)}
                                                    </span>
                                                </TableCell>

                                                <TableCell align="right">
                                                    <span className="font-semibold text-[#044947]">
                                                        {model.nominal_power}
                                                    </span>
                                                </TableCell>

                                                <TableCell align="right">
                                                    <span className="font-semibold text-[#044947]">
                                                        {model.rotor_diameter}
                                                    </span>
                                                </TableCell>

                                                <TableCell>
                                                    <span className="font-semibold text-[#044947]">
                                                        {model.manufacturer}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                )}
            </div>
        </div>
    );
}
