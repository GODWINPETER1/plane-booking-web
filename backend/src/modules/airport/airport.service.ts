// src/modules/airport/airport.service.ts
import prisma from "../../config/prisma";
import {
  CreateAirportDTO,
  UpdateAirportDTO,
  ListAirportsQuery,
} from "./airport.type";

export async function listAirports(query: ListAirportsQuery) {
  const page = Math.max(1, Number(query.page || 1));
  const pageSize = Math.min(100, Math.max(1, Number(query.pageSize || 10)));
  const skip = (page - 1) * pageSize;

  const where = query.q
    ? {
        OR: [
          { code: { contains: query.q, mode: "insensitive" } },
          { name: { contains: query.q, mode: "insensitive" } },
          { city: { contains: query.q, mode: "insensitive" } },
          { country: { contains: query.q, mode: "insensitive" } },
        ],
      }
    : undefined;

  const sortBy = query.sortBy || "createdAt";
  const order = query.order || "desc";

  const [items, total] = await Promise.all([
    prisma.airport.findMany({
      where,
      orderBy: { [sortBy]: order },
      skip,
      take: pageSize,
    }),
    prisma.airport.count({ where }),
  ]);

  return {
    items,
    page,
    pageSize,
    total,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getAirportById(id: number) {
  return prisma.airport.findUnique({ where: { id } });
}

export async function createAirport(data: CreateAirportDTO) {
  // Normalize: keep codes uppercase
  return prisma.airport.create({
    data: {
      code: data.code.toUpperCase(),
      name: data.name.trim(),
      city: data.city.trim(),
      country: data.country.trim(),
    },
  });
}

export async function updateAirport(id: number, data: UpdateAirportDTO) {
  return prisma.airport.update({
    where: { id },
    data: {
      code: data.code ? data.code.toUpperCase() : undefined,
      name: data.name?.trim(),
      city: data.city?.trim(),
      country: data.country?.trim(),
    },
  });
}

export async function deleteAirport(id: number) {
  // Nice UX: block delete if flights exist
  const relatedCount = await prisma.flight.count({
    where: { OR: [{ fromId: id }, { toId: id }] },
  });
  if (relatedCount > 0) {
    const err: any = new Error(
      "Cannot delete airport that has related flights. Reassign or delete flights first."
    );
    err.status = 400;
    err.code = "AIRPORT_HAS_FLIGHTS";
    throw err;
  }

  return prisma.airport.delete({ where: { id } });
}
