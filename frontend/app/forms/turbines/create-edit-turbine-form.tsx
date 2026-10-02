import { zodResolver } from "@hookform/resolvers/zod";
import { TurbineFormInput, TurbineFormValues, turbineSchema } from "./schema";
import { Controller, useForm } from "react-hook-form";
import { useTurbineCatalog } from "@/hooks/use-turbine-catalog";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface CreateEditTurbineFormProps {
    initialValues?: Partial<TurbineFormInput>;
    onSubmit: (values: TurbineFormValues) => Promise<void> | void;
    isLoading: boolean;
}

export default function CreateEditTurbineForm({ initialValues, onSubmit, isLoading }: CreateEditTurbineFormProps) {
    const { data: catalog = [], isPending: isCatalogLoading } = useTurbineCatalog();

    const { control, handleSubmit, formState: { errors } } = useForm<TurbineFormInput, any, TurbineFormValues>({
        resolver: zodResolver(turbineSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            latitude: initialValues?.latitude ?? "",
            longitude: initialValues?.longitude ?? "",
            turbineCatalogId: initialValues?.turbineCatalogId ?? (undefined as any),
        },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Box>
                <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Nome da Turbina:</label>
                <Controller name="name" control={control} render={({ field: { ref, ...field } }) => (
                    <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.name} helperText={errors.name?.message} placeholder="Ex: Turbina 01" />
                )} />
            </Box>
            <Box className="grid grid-cols-2 gap-4">
                <Box>
                    <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Latitude:</label>
                    <Controller name="latitude" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.latitude} helperText={errors.latitude?.message} placeholder="-23.5505" />
                    )} />
                </Box>
                <Box>
                    <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Longitude:</label>
                    <Controller name="longitude" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} inputRef={ref} size="small" fullWidth error={!!errors.longitude} helperText={errors.longitude?.message} placeholder="-46.6333" />
                    )} />
                </Box>
            </Box>
            <Box>
                <label className="text-xs font-semibold uppercase text-gray-500 mb-1 block">Modelo do Catálogo:</label>
                <Controller name="turbineCatalogId" control={control} render={({ field: { ref, value, onChange, ...field } }) => (
                    <TextField
                        {...field}
                        select
                        inputRef={ref}
                        size="small"
                        fullWidth
                        value={value ?? ""}
                        onChange={(e) => onChange(Number(e.target.value))}
                        error={!!errors.turbineCatalogId}
                        helperText={errors.turbineCatalogId?.message}
                        disabled={isCatalogLoading}
                    >
                        {catalog.length === 0 ? (
                            <MenuItem disabled value="">Nenhum modelo cadastrado no catálogo</MenuItem>
                        ) : (
                            catalog.map((model) => (
                                <MenuItem key={model.id} value={model.id}>
                                    {model.name} — {model.manufacturer} ({model.nominal_power} MW)
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                )} />
            </Box>
            <Box className="flex justify-end mt-4">
                <Button type="submit" variant="contained" disabled={isLoading} className="bg-[#00BFA6] hover:bg-[#044947] text-white font-bold normal-case px-6 py-2 rounded-lg">
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : "+ Criar Turbina"}
                </Button>
            </Box>


        </Box>
    );
}