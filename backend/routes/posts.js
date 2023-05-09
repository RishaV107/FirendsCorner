import express from "express";
import { varifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", varifyToken);
router.get("/:userId/posts", varifyToken);

/* UPDATE */
router.patch("/:id/:like", varifyToken);

export default router;
