import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";

const router = express.Router();

// POST hotel.
router.post("/", createHotel);

// UPDATE hotel.
router.put("/:id", updateHotel);

// DELETE hotel.
router.delete("/:id", deleteHotel);

// GET hotel.
router.get("/:id", getHotel);

// Get ALL hotels.
router.get("/", getHotels);

export default router;
