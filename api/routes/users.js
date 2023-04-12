import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are authenaticated and have a valid token!!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send(
//     "Hello user, you are authenaticated and now you can delete your account."
//   );
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(
//     "Hello Admin, you are authenaticated and now you can delete your account."
//   );
// });

// UPDATE User.
router.put("/:id", verifyUser, updateUser);

// DELETE User.
router.delete("/:id", verifyUser, deleteUser);

// GET User.
router.get("/:id", verifyUser, getUser);

// Get ALL Users.
router.get("/", verifyAdmin, getUsers);

export default router;
