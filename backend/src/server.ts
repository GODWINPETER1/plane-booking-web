// server.ts
import 'dotenv/config';
import express from 'express';
import type { Express, Request, Response } from 'express';
import cors from 'cors';

// import our routes
import authRoutes from './api/auth/auth_routes.js';

const app: Express = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth' , authRoutes)

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the backend!');
});




// Server Listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});