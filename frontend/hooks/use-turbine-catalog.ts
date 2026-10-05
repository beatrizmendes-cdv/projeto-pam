"use client";
import { CreateTurbineCatalogDto, UpdateTurbineCatalogDto } from "@/clients/projeto-pam";
import { ResponseTurbineCatalogDto } from "@/clients/projeto-pam";
import { turbineCatalogApi } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useTurbineCatalog() {
    const queryClient = useQueryClient();
    const refreshCatalog = () => queryClient.invalidateQueries({ queryKey: ["turbine-catalog"] });

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
        onSuccess: refreshCatalog,
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, payload }: { id: number; payload: UpdateTurbineCatalogDto }) => {
            const response = await turbineCatalogApi.turbineCatalogControllerUpdate(id, payload);
            return response.data;
        },
        onSuccess: refreshCatalog,
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const response = await turbineCatalogApi.turbineCatalogControllerRemove(id);
            return response.data;
        },
        onSuccess: refreshCatalog,
    });

    return {
        ...query,
        createTurbineCatalog: createMutation.mutateAsync,
        updateTurbineCatalog: updateMutation.mutateAsync,
        deleteTurbineCatalog: deleteMutation.mutateAsync,
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };

}

