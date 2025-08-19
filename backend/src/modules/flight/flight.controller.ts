import { Request, Response, NextFunction } from "express";
import {
  listFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
} from "./flight.service";
import { validateCreate, validateUpdate } from "./flight.types";

export async function getFlightsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const fromId = req.query.fromId ? Number(req.query.fromId) : undefined;
    const toId = req.query.toId ? Number(req.query.toId) : undefined;
    const date = req.query.date ? String(req.query.date) : undefined;

    const flights = await listFlights({ fromId, toId, date });
    res.json(flights);
  } catch (err) {
    next(err);
  }
}

export async function getFlightHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const flight = await getFlightById(id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.json(flight);
  } catch (err) {
    next(err);
  }
}

export async function createFlightHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validateCreate(req.body);
    if (errors.length) return res.status(400).json({ message: "Validation failed", errors });

    const flight = await createFlight(req.body);
    res.status(201).json(flight);
  } catch (err) {
    next(err);
  }
}

export async function updateFlightHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const errors = validateUpdate(req.body);
    if (errors.length) return res.status(400).json({ message: "Validation failed", errors });

    const updated = await updateFlight(id, req.body);
    res.json(updated);
  } catch (err: any) {
    // Prisma throws if not found
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Flight not found" });
    }
    next(err);
  }
}

export async function deleteFlightHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await deleteFlight(id);
    res.status(204).send();
  } catch (err: any) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Flight not found" });
    }
    next(err);
  }
}
