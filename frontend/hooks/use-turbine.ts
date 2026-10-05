"use client";

import type { CreateTurbineDto, ResponseTurbineDto, UpdateTurbineDto } from "@/clients/projeto-pam";
import { turbinesApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useTurbine() {
    const queryClient = useQueryClient();

    const refreshData = async () => {
        await Promise.all([
            queryClient.invalidateQueries({ queryKey: ["turbine"] }),
            queryClient.invalidateQueries({ queryKey: ["simulation"] }),
        ]);
    };

    const query = useQuery<ResponseTurbineDto[]>({
        queryKey: ["turbine"],
        queryFn: async () => {
            const response = await turbinesApi.turbinesControllerFindAll();
            return response.data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (payload: CreateTurbineDto) => {
            const response = await turbinesApi.turbinesControllerCreate(payload);
            return response.data;
        },
        onSuccess: refreshData,
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, payload }: { id: number; payload: UpdateTurbineDto }) => {
            const response = await turbinesApi.turbinesControllerUpdate(id, payload);
            return response.data;
        },
        onSuccess: refreshData,
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const response = await turbinesApi.turbinesControllerRemove(id);
            return response.data;
        },
        onSuccess: refreshData,
    });

    return {
        ...query,
        createTurbine: createMutation.mutateAsync,
        updateTurbine: updateMutation.mutateAsync,
        deleteTurbine: deleteMutation.mutateAsync,
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
}