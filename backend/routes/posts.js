import express from "express";
import { varifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

const router = express.Router();

/* READ */
router.get("/", varifyToken, getFeedPosts);
router.get("/:userId/posts", varifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/:like", varifyToken, likePost);

export default router;
