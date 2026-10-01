"use client";

import { ResponseSimulationDto } from "@/clients/projeto-pam";
import { turbinesApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useSimulation() {
    return useQuery<ResponseSimulationDto[]>({
        queryKey: ["simulation"],
        queryFn: async () => {
            const response = await turbinesApi.turbinesControllerFindAll();
            return response.data
        }
    })

}