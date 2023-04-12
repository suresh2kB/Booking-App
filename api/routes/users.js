import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controller/user.js";

const router = express.Router();

// UPDATE User.
router.put("/:id", updateUser);

// DELETE User.
router.delete("/:id", deleteUser);

// GET User.
router.get("/:id", getUser);

// Get ALL Users.
router.get("/", getUsers);

export default router;
