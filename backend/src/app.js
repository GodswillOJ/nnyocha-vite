import "dotenv/config";   // ✅ BEST way (loads once, globally)

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import waitlistRoutes from "./routes/waitlist.js";

const app = express();

// Apply CORS middleware globally
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Built-in body parser
app.use(express.json());

// Routes
app.use("/api/waitlist", waitlistRoutes);

export default app;
