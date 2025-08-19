import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error_Handler";
import authRoutes from "./modules/auth/auth_routes";
import airportRoutes from "./modules/airport/airport.routes";
import flightRoutes from "./modules/flight/fligt.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// API routes
app.use('/api/auth' , authRoutes)
app.use('/api/v1/airports' , airportRoutes)
app.use("/api/v1/flights", flightRoutes);

// Error handler LAST
app.use(errorHandler);

export default app;
