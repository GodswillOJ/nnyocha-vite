// src/models/BlogPost.js
import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },

    excerpt: { type: String, required: true },

    content: {
      type: String,
      required: true, // HTML or Markdown
    },

    image: String,

    category: {
      type: String,
      enum: ["Research", "Academics", "Innovation", "Funding", "Lifestyle"],
      index: true,
    },

    author: String,
    readTime: String,

    published: {
      type: Boolean,
      default: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("BlogPost", blogPostSchema);
