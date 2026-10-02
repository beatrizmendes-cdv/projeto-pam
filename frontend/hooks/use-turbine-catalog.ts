"use client";
import { CreateTurbineCatalogDto } from "@/clients/projeto-pam";
import { ResponseTurbineCatalogDto } from "@/clients/projeto-pam";
import { turbineCatalogApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useTurbineCatalog() {
    const queryClient = useQueryClient();

    const query = useQuery<ResponseTurbineCatalogDto[]>({
        queryKey: ["turbine-catalog"],
        queryFn: async () => {
            const response = await turbineCatalogApi.turbineCatalogControllerFindAll();
            return response.data
        }
    });

    const createMutation = useMutation({
        mutationFn: async (payload: CreateTurbineCatalogDto) => {
            const response = await turbineCatalogApi.turbineCatalogControllerCreate(payload);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["turbine-catalog"] });
        }
    });

    return {
        ...query,
        createTurbineCatalog: createMutation.mutateAsync,
        isCreating: createMutation.isPending,
    };

}

