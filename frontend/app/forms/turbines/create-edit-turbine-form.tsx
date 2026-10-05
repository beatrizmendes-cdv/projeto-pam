"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Alert, Box, Button, CircularProgress, Radio, RadioGroup, TextField } from "@mui/material";
import { useTurbineCatalog } from "@/hooks/use-turbine-catalog";
import { turbineSchema, type TurbineFormInput, type TurbineFormValues } from "./schema";

interface CreateEditTurbineFormProps {
    initialValues?: Partial<TurbineFormInput>;
    onSubmit: (values: TurbineFormValues) => Promise<void> | void;
    isLoading: boolean;
    isEditing?: boolean;
}

export default function CreateEditTurbineForm({ initialValues, onSubmit, isLoading, isEditing = false }: CreateEditTurbineFormProps) {
    const { data: catalog = [], isPending: isCatalogLoading, isError: isCatalogError, refetch } = useTurbineCatalog();

    const { control, handleSubmit, formState: { errors } } = useForm<TurbineFormInput, unknown, TurbineFormValues>({
        resolver: zodResolver(turbineSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            latitude: initialValues?.latitude ?? "",
            longitude: initialValues?.longitude ?? "",
            turbineCatalogId: initialValues?.turbineCatalogId ?? 0,
        },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className="turbine-form" noValidate>
            <Box className="modal-form-body">
                <Box>
                    <Box component="label" htmlFor="turbine-name" className="modal-field-label">Nome</Box>
                    <Controller name="name" control={control} render={({ field: { ref, ...field } }) => (
                        <TextField {...field} id="turbine-name" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.name} helperText={errors.name?.message} placeholder="Digite o nome da turbina..." />
                    )} />
                </Box>

                <Box className="modal-form-grid">
                    <Box>
                        <Box component="label" htmlFor="turbine-latitude" className="modal-field-label">Latitude</Box>
                        <Controller name="latitude" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} id="turbine-latitude" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.latitude} helperText={errors.latitude?.message} placeholder="Digite a latitude..." />
                        )} />
                    </Box>

                    <Box>
                        <Box component="label" htmlFor="turbine-longitude" className="modal-field-label">Longitude</Box>
                        <Controller name="longitude" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} id="turbine-longitude" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.longitude} helperText={errors.longitude?.message} placeholder="Digite a longitude..." />
                        )} />
                    </Box>
                </Box>

                <Box className="model-selection">
                    <Box className="mb-3 flex shrink-0 items-center gap-3">
                        <Box component="h3" id="catalog-options-title" className="m-0 text-sm font-semibold uppercase tracking-wider text-[#009B9F]">Modelos registrados</Box>
                        <Box className="h-px flex-1 bg-[#DCE9EB]" />
                    </Box>

                    {isCatalogLoading && (
                        <Box role="status" className="flex items-center gap-3 py-4 text-[#68858C]">
                            <CircularProgress size={20} />
                            Carregando modelos...
                        </Box>
                    )}

                    {isCatalogError && (
                        <Alert severity="error" action={<Button type="button" color="inherit" variant="text" onClick={() => void refetch()}>Tentar novamente</Button>}>
                            Não foi possível carregar os modelos.
                        </Alert>
                    )}

                    {!isCatalogLoading && !isCatalogError && catalog.length === 0 && (
                        <Alert severity="info">Cadastre um modelo no catálogo antes de criar uma turbina.</Alert>
                    )}

                    {!isCatalogLoading && !isCatalogError && catalog.length > 0 && (
                        <Controller name="turbineCatalogId" control={control} render={({ field }) => (
                            <RadioGroup name={field.name} value={field.value} onChange={(event) => field.onChange(Number(event.target.value))} onBlur={field.onBlur} aria-labelledby="catalog-options-title" aria-describedby={errors.turbineCatalogId ? "catalog-options-error" : undefined} className="model-list rounded-lg border border-[#D6E5E7]">
                                {catalog.map((model, index) => (
                                    <Box component="label" key={model.id} className={`flex items-center gap-2 border-b border-[#E1ECEE] px-3 py-2 last:border-b-0 ${field.value === model.id ? "bg-[#F4FAF9]" : "bg-white"} ${isLoading ? "cursor-default" : "cursor-pointer"}`}>
                                        <Radio value={model.id} disabled={isLoading} slotProps={{ input: { ref: index === 0 ? field.ref : undefined } }} />

                                        <Box className="min-w-0 flex-1">
                                            <Box component="p" className="m-0 text-sm font-semibold text-[#16494D]">{model.name}</Box>
                                            <Box component="p" className="m-0 text-xs text-[#68858C]">{model.manufacturer} · Ø {model.rotor_diameter} m</Box>
                                        </Box>

                                        <Box component="span" className="shrink-0 text-sm font-semibold text-[#16494D]">{model.nominal_power} MW</Box>
                                    </Box>
                                ))}
                            </RadioGroup>
                        )} />
                    )}

                    {errors.turbineCatalogId && (
                        <Box component="p" id="catalog-options-error" className="mt-2 shrink-0 text-sm text-[#D32F2F]">{errors.turbineCatalogId.message}</Box>
                    )}
                </Box>
            </Box>

            <Box className="modal-form-footer">
                <Button type="submit" disabled={isLoading || isCatalogLoading || isCatalogError || catalog.length === 0}>
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : isEditing ? "Salvar alterações" : "+ Criar"}
                </Button>
            </Box>
        </Box>
    );
}