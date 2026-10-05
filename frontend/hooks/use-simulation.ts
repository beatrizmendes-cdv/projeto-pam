"use client";

import type { CreateSimulationDto, ResponseSimulationDto, UpdateSimulationDto } from "@/clients/projeto-pam";
import { simulationApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSimulation() {
    const queryClient = useQueryClient();

    const refreshData = async () => {
        await Promise.all([
            queryClient.invalidateQueries({ queryKey: ["simulation"] }),
            queryClient.invalidateQueries({ queryKey: ["turbine"] }),
        ]);
    };

    const query = useQuery<ResponseSimulationDto[]>({
        queryKey: ["simulation"],
        queryFn: async () => {
            const response = await simulationApi.simulationControllerFindAll();
            return response.data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (payload: CreateSimulationDto) => {
            const response = await simulationApi.simulationControllerCreate(payload);
            return response.data;
        },
        onSuccess: refreshData,
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, payload }: { id: number; payload: UpdateSimulationDto }) => {
            const response = await simulationApi.simulationControllerUpdate(id, payload);
            return response.data;
        },
        onSuccess: refreshData,
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const response = await simulationApi.simulationControllerRemove(id);
            return response.data;
        },
        onSuccess: refreshData,
    });

    return {
        ...query,
        createSimulation: createMutation.mutateAsync,
        updateSimulation: updateMutation.mutateAsync,
        deleteSimulation: deleteMutation.mutateAsync,
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
}