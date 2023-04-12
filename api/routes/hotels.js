import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// POST hotel.
router.post("/", verifyAdmin, createHotel);

// UPDATE hotel.
router.put("/:id", verifyAdmin, updateHotel);

// DELETE hotel.
router.delete("/:id", verifyAdmin, deleteHotel);

// GET hotel.
router.get("/:id", getHotel);

// Get ALL hotels.
router.get("/", getHotels);

export default router;
