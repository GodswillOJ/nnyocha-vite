// src/models/Waitlist.js
import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,

    email: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    phone: {
      type: String,
      unique: true,
      sparse: true
    },

    persona: String,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model("Waitlist", waitlistSchema);
