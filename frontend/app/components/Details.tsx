"use client";

import { ResponseTurbineDto } from "@/clients/projeto-pam";
import { ResponseSimulationDto } from "@/clients/projeto-pam";
import { Box, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import CloseIcon from '@mui/icons-material/Close';


const SimulationMap = dynamic(() => import("./SimulationMap"), {
    ssr: false,
    loading: () => (
        <Box className="flex h-full items-center justify-center bg-[#F4FAF9}">
            <CircularProgress size={28} />
        </Box>
    ),
});

type DetailsProps = {
    simulation: ResponseSimulationDto | null
    turbines: ResponseTurbineDto[];
    onClose: () => void;
};

function formatCoordinate(value: number, positiveDirection: string, negativeDirection: string) {
    return `${Math.abs(value).toFixed(2)}°${value >= 0 ? positiveDirection : negativeDirection}`;
}

export default function Details({ simulation, turbines, onClose }: DetailsProps) {
    const associatedTurbines = useMemo(() => {
        return turbines.filter((turbine) => turbine.simulation_id === simulation?.id);
    }, [turbines, simulation?.id]);

    return (
        <Dialog open={simulation !== null} onClose={onClose} maxWidth="lg" fullWidth aria-labelledby="simulation-details-title">
            <DialogTitle id="simulation-details-title">
                <Box component="span" className="font-mono text-lg sm:text-xl">SIMULAÇÃO: {simulation?.name}</Box>
                <IconButton onClick={onClose} size="small" aria-label="Fechar visualização">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {simulation && (
                    <Box className="grid grid-cols-1 gap-6 p-4 sm:p-6 md:grid-cols-[minmax(240px,1fr)_minmax(0,2fr)]">
                        <Box className="flex min-w-0 flex-col">
                            <Box className="flex items-center justify-between gap-3 border-b border-[#E1ECEE] pb-5">
                                <span className="font-mono text-sm uppercase text-[#78959D]">Número de turbinas</span>
                                <strong className="font-mono text-[#044947]">{associatedTurbines.length}</strong>
                            </Box>
                            <Box className="my-5 flex items-center gap-3">
                                <h3 className="m-0 font-mono text-sm font-semibold uppercase text-[#16A6AF]">Turbinas associadas</h3>
                                <Box className="h-px flex-1 bg-[#16A6AF]" />
                            </Box>
                            <Box className="max-h-64 overflow-y-auto pr-2 md:max-h-95">
                                {associatedTurbines.length === 0 ? (
                                    <p className="text-sm text-[#64748B]">Esta simulação não possui turbinas associadas.</p>
                                ) : (
                                    associatedTurbines.map((turbine) => {
                                        const [longitude, latitude] = turbine.coordinates.coordinates;

                                        return (
                                            <Box key={turbine.id} className="flex items-start gap-3 border-b border-[#E1ECEE] py-4 first:pt-0">
                                                <Box className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#20B8AE]" />
                                                <Box className="min-w-0">
                                                    <p className="m-0 font-mono text-sm font-semibold text-[#044947]">{turbine.name}</p>
                                                    <p className="m-0 pt-1 font-mono text-xs text-[#78959D]">{formatCoordinate(latitude, "N", "S")}, {formatCoordinate(longitude, "E", "W")}</p>
                                                </Box>
                                            </Box>
                                        );
                                    })
                                )}
                            </Box>
                        </Box>
                        <Box className="relative isolate h-80 min-w-0 overflow-hidden rounded-2xl border border-[#CFE4E5] bg-[#F4FAF9] md:h-115">
                            <SimulationMap key={simulation.id} turbines={associatedTurbines} />
                        </Box>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );

}