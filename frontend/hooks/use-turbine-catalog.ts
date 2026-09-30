"use client";
import { ResponseTurbineCatalogDto } from "@/clients/projeto-pam";
import { TurbinesCatalogApi } from "@/clients/projeto-pam";
import { turbineCatalogApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useTurbineCatalog() {
    return useQuery<ResponseTurbineCatalogDto[]>({
        queryKey: ["turbine-catalog"],
        queryFn: async () => {
            const response = await turbineCatalogApi.turbineCatalogControllerFindAll();
            return response.data
        }
    })

}