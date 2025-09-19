import api from "./axios";
import type { CreateAirportDTO , UpdateAirportDTO} from "../features/airports/types";

// lightweight wrappers that return axios promises

export const fetchAirports = (params?: any) => api.get('/airports' , {params});
export const fetchAirport = (id: number) => api.get(`/airports/${id}`);
export const createAirports = (data: CreateAirportDTO) => api.post('/airports' , data);
export const updateAirports = (id: number , data: UpdateAirportDTO) => api.put(`/airports/${id}` , data);
export const deleteAirports = (id: number) => api.delete(`/airports/${id}`)


