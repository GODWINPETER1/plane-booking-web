import prisma from "../../config/prisma";
import { CreateFlightDTO, UpdateFlightDTO } from "./flight.types";

export async function listFlights(params: {
  fromId?: number;
  toId?: number;
  date?: string; // YYYY-MM-DD to match departAt day
}) {
  const where: any = {};

  if (typeof params.fromId === "number") where.fromId = params.fromId;
  if (typeof params.toId === "number") where.toId = params.toId;

  // Optional date filter — find flights departing on a specific day
  if (params.date) {
    const start = new Date(params.date);
    const end = new Date(start);
    end.setDate(start.getDate() + 1);
    where.departAt = { gte: start, lt: end };
  }

  return prisma.flight.findMany({
    where,
    orderBy: { departAt: "asc" },
    include: {
      from: true,   // Airport summary (requires existing airports)
      to: true,
      fareClasses: true,
      seats: true,
    },
  });
}

export async function getFlightById(id: number) {
  return prisma.flight.findUnique({
    where: { id },
    include: {
      from: true,
      to: true,
      fareClasses: true,
      seats: true,
      bookings: true,
    },
  });
}

export async function createFlight(data: CreateFlightDTO) {
  // NOTE: This will fail if fromId/toId don't exist due to FK — that's fine for now.
  return prisma.flight.create({
    data: {
      flightNumber: data.flightNumber,
      departAt: new Date(data.departAt),
      arriveAt: new Date(data.arriveAt),
      fromId: data.fromId,
      toId: data.toId,
    },
  });
}

export async function updateFlight(id: number, data: UpdateFlightDTO) {
  return prisma.flight.update({
    where: { id },
    data: {
      flightNumber: data.flightNumber,
      departAt: data.departAt ? new Date(data.departAt) : undefined,
      arriveAt: data.arriveAt ? new Date(data.arriveAt) : undefined,
      fromId: typeof data.fromId === "number" ? data.fromId : undefined,
      toId: typeof data.toId === "number" ? data.toId : undefined,
    },
  });
}

export async function deleteFlight(id: number) {
  return prisma.flight.delete({ where: { id } });
}
