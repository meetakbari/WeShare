import express from "express";
import {
    getFeedPosts,
    getUserPosts,
    likePost
} from '../controllers/posts.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:id", verifyToken, getUserPosts); // id: userId

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost); // id: postId

export default router;