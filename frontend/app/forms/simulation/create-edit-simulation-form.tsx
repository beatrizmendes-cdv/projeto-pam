"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Alert, Box, Button, Checkbox, CircularProgress, TextField } from "@mui/material";
import { useTurbine } from "@/hooks/use-turbine";
import { useTurbineCatalog } from "@/hooks/use-turbine-catalog";
import { simulationSchema, type SimulationFormInput, type SimulationFormValues } from "./schema";

interface CreateEditSimulationFormProps {
    initialValues?: Partial<SimulationFormInput>;
    onSubmit: (values: SimulationFormValues) => Promise<void> | void;
    isLoading: boolean;
    submitError?: string | null;

}

export default function CreateEditSimulationForm({ initialValues, onSubmit, isLoading, submitError }: CreateEditSimulationFormProps) {
    const { data: turbines = [], isPending: isTurbinesLoading, isError: isTurbinesError, refetch: refetchTurbines } = useTurbine();
    const { data: catalog = [], isPending: isCatalogLoading, isError: isCatalogError, refetch: refetchCatalog } = useTurbineCatalog();

    const availableTurbines = turbines.filter((turbine) => turbine.simulation_id === null);
    const isListLoading = isTurbinesLoading || isCatalogLoading;
    const isListError = isTurbinesError || isCatalogError;

    const { control, handleSubmit, setError, formState: { errors } } = useForm<SimulationFormInput, unknown, SimulationFormValues>({
        resolver: zodResolver(simulationSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            turbineIds: initialValues?.turbineIds ?? [],
        },
    });

    const handleValidSubmit = async (values: SimulationFormValues) => {
        const hasUnavailableTurbine = values.turbineIds.some((id) => !availableTurbines.some((turbine) => turbine.id === id));

        if (hasUnavailableTurbine) {
            setError("turbineIds", { message: "Uma turbina selecionada não está disponível." });
            return;
        }

        await onSubmit(values);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(handleValidSubmit)} className="turbine-form" noValidate>
            <Box className="modal-form-body">
                <Box>
                    <Box component="label" htmlFor="simulation-name" className="modal-field-label">Nome</Box>
                    <Controller name="name" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} id="simulation-name" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.name} helperText={errors.name?.message} placeholder="Digite o nome da simulação..." />
                    )} />
                </Box>

                {submitError && <Alert severity="error">{submitError}</Alert>}

                <Box className="model-selection">
                    <Box className="mb-3 flex shrink-0 items-center gap-3">
                        <Box component="h3" id="simulation-turbines-title" className="m-0 text-sm font-semibold uppercase tracking-wider text-[#009B9F]">Turbinas disponíveis</Box>
                        <Box className="h-px flex-1 bg-[#DCE9EB]" />
                    </Box>

                    {isListLoading && (
                        <Box role="status" className="flex items-center gap-3 py-4 text-[#68858C]">
                            <CircularProgress size={20} />
                            Carregando turbinas...
                        </Box>
                    )}

                    {!isListLoading && isListError && (
                        <Alert severity="error" action={<Button type="button" color="inherit" variant="text" onClick={() => { void refetchTurbines(); void refetchCatalog(); }}>Tentar novamente</Button>}>
                            Não foi possível carregar as turbinas e seus modelos.
                        </Alert>
                    )}

                    {!isListLoading && !isListError && availableTurbines.length === 0 && (
                        <Alert severity="info">Não há turbinas livres. Cadastre uma turbina antes de criar a simulação.</Alert>
                    )}

                    {!isListLoading && !isListError && availableTurbines.length > 0 && (
                        <Controller name="turbineIds" control={control} render={({ field }) => (
                            <Box role="group" aria-labelledby="simulation-turbines-title" aria-describedby={errors.turbineIds ? "simulation-turbines-error" : undefined} className="model-list rounded-lg border border-[#D6E5E7]">
                                {availableTurbines.map((turbine, index) => {
                                    const model = catalog.find((item) => item.id === turbine.turbine_catalog_id);
                                    const selected = field.value.includes(turbine.id);
                                    const [longitude, latitude] = turbine.coordinates.coordinates;

                                    return (
                                        <Box component="label" key={turbine.id} className={`flex items-center gap-2 border-b border-[#E1ECEE] px-3 py-2 last:border-b-0 ${selected ? "bg-[#F4FAF9]" : "bg-white"} ${isLoading ? "cursor-default" : "cursor-pointer"}`}>
                                            <Checkbox name={field.name} checked={selected} disabled={isLoading} onBlur={field.onBlur} slotProps={{ input: { ref: index === 0 ? field.ref : undefined } }} onChange={(_, checked) => field.onChange(checked ? [...field.value, turbine.id] : field.value.filter((id) => id !== turbine.id))} sx={{ color: "#A8C6CA", "&.Mui-checked": { color: "#20B8AE" } }} />

                                            <Box className="min-w-0 flex-1">
                                                <Box component="p" className="m-0 text-sm font-semibold text-[#16494D]">{turbine.name}</Box>
                                                <Box component="p" className="m-0 text-xs text-[#68858C]">{model ? `${model.manufacturer} · Ø ${model.rotor_diameter} m` : "Modelo não encontrado"}</Box>
                                                <Box component="p" className="m-0 text-xs text-[#68858C]">Lat: {latitude}° · Lon: {longitude}°</Box>
                                            </Box>

                                            <Box component="span" className="shrink-0 text-sm font-semibold text-[#16494D]">{model ? `${model.nominal_power} MW` : "—"}</Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        )} />
                    )}

                    {errors.turbineIds && (
                        <Box component="p" id="simulation-turbines-error" className="mt-2 shrink-0 text-sm text-[#D32F2F]">{errors.turbineIds.message}</Box>
                    )}
                </Box>
            </Box>

            <Box className="modal-form-footer">
                <Button type="submit" disabled={isLoading || isListLoading || isListError || availableTurbines.length === 0}>
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : "+ Criar"}
                </Button>
            </Box>
        </Box>
    );
}