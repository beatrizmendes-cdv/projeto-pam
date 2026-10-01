"use client";

import { ResponseTurbineDto } from "@/clients/projeto-pam";
import { turbinesApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useTurbine() {
    return useQuery<ResponseTurbineDto[]>({
        queryKey: ["turbine"],
        queryFn: async () => {
            const response = await turbinesApi.turbinesControllerFindAll();
            return response.data
        }
    });
}