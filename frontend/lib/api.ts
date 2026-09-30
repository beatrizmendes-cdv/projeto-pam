import { Configuration, TurbineApi, TurbinesCatalogApi, SimulationApi } from '@/clients/projeto-pam';

const apiConfiguration = new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
});

export const turbinesApi = new TurbineApi(apiConfiguration);
export const turbineCatalogApi = new TurbinesCatalogApi(apiConfiguration);
export const simulationApi = new SimulationApi(apiConfiguration);