"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { turbineCatalogSchema, type TurbineCatalogFormInput, type TurbineCatalogFormValues } from "./schema";

interface CreateEditTurbineCatalogFormProps {
    initialValues?: Partial<TurbineCatalogFormInput>;
    onSubmit: (values: TurbineCatalogFormValues) => Promise<void> | void;
    isLoading: boolean;
    isEditing?: boolean;
}

export default function CreateEditTurbineCatalogForm({ initialValues, onSubmit, isLoading, isEditing = false }: CreateEditTurbineCatalogFormProps) {
    const { control, handleSubmit, formState: { errors } } = useForm<TurbineCatalogFormInput, unknown, TurbineCatalogFormValues>({
        resolver: zodResolver(turbineCatalogSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            manufacturer: initialValues?.manufacturer ?? "",
            nominalPower: initialValues?.nominalPower ?? "",
            rotorDiameter: initialValues?.rotorDiameter ?? "",
        },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box className="modal-form-body">
                <Box className="modal-form-grid">
                    <Box>
                        <Box component="label" htmlFor="catalog-name" className="modal-field-label">Nome</Box>
                        <Controller name="name" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} id="catalog-name" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.name} helperText={errors.name?.message} placeholder="Nome da turbina..." />
                        )} />
                    </Box>

                    <Box>
                        <Box component="label" htmlFor="catalog-manufacturer" className="modal-field-label">Fabricante</Box>
                        <Controller name="manufacturer" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} id="catalog-manufacturer" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.manufacturer} helperText={errors.manufacturer?.message} placeholder="Nome do fabricante..." />
                        )} />
                    </Box>

                    <Box>
                        <Box component="label" htmlFor="catalog-power" className="modal-field-label">Potência (MW)</Box>
                        <Controller name="nominalPower" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} id="catalog-power" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.nominalPower} helperText={errors.nominalPower?.message} placeholder="15.0" />
                        )} />
                    </Box>

                    <Box>
                        <Box component="label" htmlFor="catalog-diameter" className="modal-field-label">Diâmetro do rotor (m)</Box>
                        <Controller name="rotorDiameter" control={control} render={({ field: { ref, ...field } }) => (
                            <TextField {...field} id="catalog-diameter" inputRef={ref} fullWidth disabled={isLoading} error={!!errors.rotorDiameter} helperText={errors.rotorDiameter?.message} placeholder="236" />
                        )} />
                    </Box>
                </Box>
            </Box>

            <Box className="modal-form-footer">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : isEditing ? "Salvar alterações" : "+ Criar"}
                </Button>
            </Box>
        </Box>
    );
}