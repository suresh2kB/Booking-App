import express from "express";
import {
  deleteRoom,
  getRoom,
  getRooms,
  createRoom,
  updateRoom,
} from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// POST room.
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE room.
router.put("/:id", verifyAdmin, updateRoom);

// DELETE room.
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET room.
router.get("/:id", getRoom);

// Get ALL rooms.
router.get("/", getRooms);

export default router;
