export type CreateFlightDTO = {
    flightNumber: string;
    departAt: string;
    arriveAt: string
    fromId: number;
    toId: number
}

// we'll validate payloads to avoid bad data (e.g ariiveAt before departAt , fromId === toId)
export type UpdateFlightDTO = Partial<CreateFlightDTO>;

export function validateCreate(input: CreateFlightDTO) {
    const errors: string[] = [];

    if(!input.flightNumber?.trim()) errors.push("FlightNumber is required");
    if(!input.departAt) errors.push("DepartAt is required");
    if(!input.arriveAt) errors.push("ArriveAt is required");
    if(typeof input.fromId !== "number") errors.push("fromId must be a number");
    if(typeof input.toId !== "number") errors.push("toId must be a number");

    const depart = new Date(input.departAt);
    const arrive = new Date(input.arriveAt);

    if(isNaN(depart.getTime())) errors.push("departAt must be a valid ISO date");
    if(isNaN(arrive.getTime())) errors.push("arriveAt must be a valid ISO date");
    if(!isNaN(depart.getTime()) && !isNaN(arrive.getTime()) && arrive <= depart) {
        errors.push("ArriveAt must be after departAt")
    }
    if(input.fromId === input.toId) {
        errors.push("fromId and toId cannot be the same")
    }

    return errors;
}

export function validateUpdate(input: UpdateFlightDTO) {
  const errors: string[] = [];
  if (input.departAt && isNaN(new Date(input.departAt).getTime())) {
    errors.push("departAt must be a valid ISO date");
  }
  if (input.arriveAt && isNaN(new Date(input.arriveAt).getTime())) {
    errors.push("arriveAt must be a valid ISO date");
  }
  if (input.departAt && input.arriveAt) {
    const depart = new Date(input.departAt);
    const arrive = new Date(input.arriveAt);
    if (arrive <= depart) errors.push("arriveAt must be after departAt");
  }
  if (typeof input.fromId === "number" && typeof input.toId === "number" && input.fromId === input.toId) {
    errors.push("fromId and toId cannot be the same");
  }
  return errors;
}