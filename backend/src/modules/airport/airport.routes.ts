// src/modules/airport/airport.routes.ts
import { Router } from "express";
import {
  listAirportsHandler,
  getAirportHandler,
  createAirportHandler,
  updateAirportHandler,
  deleteAirportHandler,
} from "./airport.controller";
import { authenticate , authorize} from "../../middleware/auth_middleware"

const router = Router();

// Listing is typically public; mutation is staff-only (protect later)
router.get("/", listAirportsHandler);
router.get("/:id", getAirportHandler);

// only STAFF or ADMIN can add/update/delete airports
router.post("/", authenticate , authorize(["STAFF" , "ADMIN"]), createAirportHandler);
router.put("/:id", authenticate , authorize(["STAFF" , "ADMIN"]) ,updateAirportHandler);
router.delete("/:id", authenticate, authorize(["STAFF" , "ADMIN"]), deleteAirportHandler);

export default router;
