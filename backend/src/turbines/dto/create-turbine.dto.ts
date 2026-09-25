export class CreateTurbineDto {
    name: string;
    coordinates: {
        type: 'Point';
        coordinates: [number, number];
    };
    simulationId: number;
    turbineCatalogId: number;
}
