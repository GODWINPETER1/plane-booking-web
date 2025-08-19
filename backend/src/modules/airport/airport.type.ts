// src/modules/airport/airport.types.ts
export type CreateAirportDTO = {
  code: string;   // e.g., "JFK"
  name: string;
  city: string;
  country: string;
};

export type UpdateAirportDTO = Partial<CreateAirportDTO>;

const IATA = /^[A-Za-z]{3}$/; // keep it simple; adjust if you want ICAO or longer codes

export function validateCreate(a: CreateAirportDTO) {
  const errors: string[] = [];
  if (!a.code?.trim()) errors.push("code is required");
  if (!a.name?.trim()) errors.push("name is required");
  if (!a.city?.trim()) errors.push("city is required");
  if (!a.country?.trim()) errors.push("country is required");
  if (a.code && !IATA.test(a.code)) errors.push("code must be 3 letters (IATA)");
  return errors;
}

export function validateUpdate(a: UpdateAirportDTO) {
  const errors: string[] = [];
  if (a.code && !/^[A-Za-z]{3}$/.test(a.code)) {
    errors.push("code must be 3 letters (IATA)");
  }
  return errors;
}

export type ListAirportsQuery = {
  q?: string;                 // free-text search
  page?: number;              // 1-based
  pageSize?: number;          // default 10, max 100
  sortBy?: "code" | "name" | "city" | "country" | "createdAt";
  order?: "asc" | "desc";
};
