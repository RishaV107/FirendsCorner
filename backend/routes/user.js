import express from "express";
import { varifyToken } from "../middleware/auth.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/user.js";

const router = express.Router();

/* READ */
router.get("/:id", varifyToken, getUser);
router.get("/:id/friends", varifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", varifyToken, addRemoveFriend);

export default router;
