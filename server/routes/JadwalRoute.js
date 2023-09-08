import express from "express";
import { getJadwals, getJadwalsById, createJadwals, updateJadwals, deleteJadwals } from "../controller/JadwalController.js";

const router = express.Router();
router.get("/jadwal", getJadwals);
router.get("/jadwal/:id", getJadwalsById);
router.post("/jadwal", createJadwals);
router.patch("/jadwal/:id", updateJadwals);
router.delete("/jadwal/:id", deleteJadwals);

export default router;
