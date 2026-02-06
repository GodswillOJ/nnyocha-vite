import express from "express";
import upload from "../middlewares/upload.js";
import {
  getPosts,
  getPostBySlug,
  getFeaturedPost,
  incrementViews,
  createPost
} from "../controllers/postControl.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", upload.single("image"), createPost);
router.get("/featured", getFeaturedPost);
router.get("/:slug", getPostBySlug);
router.patch("/:slug/view", incrementViews);

export default router;
