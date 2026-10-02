"use client";

import { CreateTurbineDto } from "@/clients/projeto-pam";
import { ResponseTurbineDto } from "@/clients/projeto-pam";
import { turbinesApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useTurbine() {
    const queryClient = useQueryClient();

    const query = useQuery<ResponseTurbineDto[]>({
        queryKey: ["turbine"],
        queryFn: async () => {
            const response = await turbinesApi.turbinesControllerFindAll();
            return response.data
        }
    });
    const createMutation = useMutation({
        mutationFn: async (payload: CreateTurbineDto) => {
            const response = await turbinesApi.turbinesControllerCreate(payload);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["turbine"] });
        }
    });

    return {
        ...query,
        createTurbine: createMutation.mutateAsync,
        isCreating: createMutation.isPending,
    };

}