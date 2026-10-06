import { ResponseTurbineDto } from "@/clients/projeto-pam"
import { MapContainer, TileLayer, CircleMarker, Popup, ZoomControl, useMap } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import { useEffect, useMemo } from "react";
import { Alert, Box } from "@mui/material";
import "leaflet/dist/leaflet.css";

type SimulationMapProps = {
    turbines: ResponseTurbineDto[];
};

type TurbinePoint = {
    id: number;
    name: string;
    position: LatLngTuple;
}

function AdjustMap({ points }: { points: TurbinePoint[] }) {
    const map = useMap();

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            map.invalidateSize();

            if (points.length === 1) {
                map.setView(points[0].position, 13)
            }
            else if (points.length > 1) {
                map.fitBounds(points.map((point) => point.position), { padding: [35, 35], maxZoom: 14 });
            }
        });
        return () => cancelAnimationFrame(frame);
    }, [map, points]);

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            map.invalidateSize({ pan: false });
        });
        observer.observe(map.getContainer());
        return () => observer.disconnect();
    }, [map]);
    return null;
}

export default function SimulationMap({ turbines }: SimulationMapProps) {
    const points = useMemo<TurbinePoint[]>(() => {
        return turbines.flatMap((turbine) => {
            const [longitude, latitude] = turbine.coordinates.coordinates;
            const validCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude) && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180;

            if (!validCoordinates) return [];

            return [{ id: turbine.id, name: turbine.name, position: [latitude, longitude] as LatLngTuple }];
        });
    }, [turbines]);

    if (points.length === 0) {
        return (
            <Box className="flex h-full items-center justify-center bg-[#F4FAF9] p-6">
                <p className="text-center text-sm text-[#64748B]">Não há coordenadas válidas para mostrar no mapa.</p>
            </Box>
        )

    }

    return (
        <Box className="relative h-full w-full">
            <MapContainer center={points[0].position} zoom={13} zoomControl={false} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                <ZoomControl position="topright" />
                <AdjustMap points={points} />
                {points.map((point) => (
                    <CircleMarker key={point.id} center={point.position} radius={8} pathOptions={{ color: "#044947", weight: 2, fillColor: "#20B8AE", fillOpacity: 1 }}>
                        <Popup>
                            <strong>{point.name}</strong>
                            <br />
                            Latitude: {point.position[0]}
                            <br />
                            Longitude: {point.position[1]}
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </Box>
    )
}
