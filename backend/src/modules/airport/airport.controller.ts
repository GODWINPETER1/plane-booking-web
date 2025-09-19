// src/modules/airport/airport.controller.ts
import { Request, Response, NextFunction } from "express";
import {
  listAirports,
  getAirportById,
  createAirport,
  updateAirport,
  deleteAirport,
} from "./airport.service";
import { validateCreate, validateUpdate } from "./airport.type";

export async function listAirportsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { q, page, pageSize, sortBy, order } = req.query;
    const result = await listAirports({
      q: q ? String(q) : undefined,
      page: page ? Number(page) : undefined,
      pageSize: pageSize ? Number(pageSize) : undefined,
      sortBy: sortBy ? (String(sortBy) as any) : undefined,
      order: order ? (String(order) as any) : undefined,
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getAirportHandler(req: Request, res: Response, next: NextFunction) {
  try {
    
    const id = Number(req.params.id);
    if(isNaN(id)) {
      return res.status(400).json({ error: "Invalid airport ID"})
    }

    const airport = await getAirportById(id);
    if (!airport) return res.status(404).json({ message: "Airport not found" });
    res.json(airport);
  } catch (err) {
    next(err);
  }
}

export async function createAirportHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validateCreate(req.body);
    if (errors.length) return res.status(400).json({ message: "Validation failed", errors });

    const airport = await createAirport(req.body);
    res.status(201).json(airport);
  } catch (err: any) {
    // Unique code conflict
    if (err.code === "P2002") {
      return res.status(409).json({ message: "Airport code already exists", code: err.code });
    }
    next(err);
  }
}

export async function updateAirportHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const errors = validateUpdate(req.body);
    if (errors.length) return res.status(400).json({ message: "Validation failed", errors });

    const updated = await updateAirport(id, req.body);
    res.json(updated);
  } catch (err: any) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Airport not found" });
    }
    if (err.code === "P2002") {
      return res.status(409).json({ message: "Airport code already exists", code: err.code });
    }
    next(err);
  }
}

export async function deleteAirportHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await deleteAirport(id);
    res.status(204).send();
  } catch (err: any) {
    if (err.code === "AIRPORT_HAS_FLIGHTS") {
      return res.status(400).json({ message: err.message, code: err.code });
    }
    if (err.code === "P2025") {
      return res.status(404).json({ message: "Airport not found" });
    }
    // Fallback: FK violation (if pre-check missed anything)
    if (err.code === "P2003") {
      return res.status(400).json({ message: "Cannot delete: foreign key constraint", code: err.code });
    }
    next(err);
  }
}
