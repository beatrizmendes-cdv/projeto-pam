import { turbineCatalogSchema, type TurbineCatalogFormInput, type TurbineCatalogFormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";

interface CreateEditTurbineCatalogFormProps {
    initialValues?: Partial<TurbineCatalogFormInput>;
    onSubmit: (values: TurbineCatalogFormValues) => Promise<void> | void;
    isLoading: boolean;
}

export default function CreateEditTurbineCatalogForm({ initialValues, onSubmit, isLoading }: CreateEditTurbineCatalogFormProps) {
    const { control, handleSubmit, formState: { errors } } = useForm<TurbineCatalogFormInput, any, TurbineCatalogFormValues>({
        resolver: zodResolver(turbineCatalogSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            manufacturer: initialValues?.manufacturer ?? "",
            nominalPower: initialValues?.nominalPower ?? "",
            rotorDiameter: initialValues?.rotorDiameter ?? "",
        },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Box className="grid grid-cols-2 gap-4">
                <Box>
                    <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Nome:</label>
                    <Controller name="name" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.name} helperText={errors.name?.message} placeholder="Nome da Turbina..." />
                    )} />
                </Box>
                <Box>
                    <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Fabricante:</label>
                    <Controller name="manufacturer" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.manufacturer} helperText={errors.manufacturer?.message} placeholder="Nome do fabricante..." />
                    )} />
                </Box>
            </Box>

            <Box className="grid grid-cols-2 gap-4">
                <Box>
                    <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Potência (MW):</label>
                    <Controller name="nominalPower" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.nominalPower} helperText={errors.nominalPower?.message} placeholder="15.0" />
                    )} />
                </Box>
                <Box>
                    <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Diâmetro do Rotor (M):</label>
                    <Controller name="rotorDiameter" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.rotorDiameter} helperText={errors.rotorDiameter?.message} placeholder="236" />
                    )} />
                </Box>
            </Box>

            <Box className="flex justify-end mt-4">
                <Button type="submit" variant="contained" disabled={isLoading} className="bg-[#00BFA6] hover:bg-[#044947] text-white font-bold normal-case px-6 py-2 rounded-lg">
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : "+ Criar"}
                </Button>
            </Box>
        </Box>
    );
}