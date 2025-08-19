import { Router } from "express";
import {
  getFlightsHandler,
  getFlightHandler,
  createFlightHandler,
  updateFlightHandler,
  deleteFlightHandler,
} from "./flight.controller";
// import { requireAuth } from "../../middlewares/authMiddleware"; // if you want to protect

const router = Router();

// Public listing for now (you can protect later)
router.get("/", getFlightsHandler);
router.get("/:id", getFlightHandler);

// Typically protected for admins/staff
// router.post("/", requireAuth, createFlightHandler);
router.post("/", createFlightHandler);
router.put("/:id", updateFlightHandler);
router.delete("/:id", deleteFlightHandler);

export default router;
