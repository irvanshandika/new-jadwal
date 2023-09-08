/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import JadwalRoute from "./server/routes/JadwalRoute.js";
dotenv.config();

const port = process.env.APP_PORT || 5173;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use("/api", JadwalRoute);

app.use(express.static(path.join(__dirname, "dist")));

// Handle other routes or API endpoints here

// Serve the React app for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(Number(port), () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
