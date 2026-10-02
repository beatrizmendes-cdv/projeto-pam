"use client";

import { CreateSimulationDto } from "@/clients/projeto-pam";
import { ResponseSimulationDto } from "@/clients/projeto-pam";
import { simulationApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSimulation() {
    const queryClient = useQueryClient();

    const query = useQuery<ResponseSimulationDto[]>({
        queryKey: ["simulation"],
        queryFn: async () => {
            const response = await simulationApi.simulationControllerFindAll();
            return response.data
        }
    });

    const createMutation = useMutation({
        mutationFn: async (payload: CreateSimulationDto) => {
            const response = await simulationApi.simulationControllerCreate(payload);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["simulation"] });
        }
    });
    return {
        ...query,
        createTurbine: createMutation.mutateAsync,
        isCreating: createMutation.isPending,

    };




}