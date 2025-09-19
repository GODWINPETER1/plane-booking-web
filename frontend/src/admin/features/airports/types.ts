export interface Airport {
    id: number;
    code: string;
    name: string;
    city: string;
    country: string;
    createdAt?: string;

}

export interface AirportResponse {
    items: Airport[]
    page: number;
    pagesize: number;
    total: number;
    totalPages: number
}

export interface CreateAirportDTO {
    code: string;
    name: string;
    city: string;
    country: string
}

export type UpdateAirportDTO =  Partial<CreateAirportDTO>;
