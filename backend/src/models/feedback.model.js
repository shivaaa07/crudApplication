import mongoose, { Schema } from "mongoose";
import { User } from "./registerUser.model";

const feedbackSchema = new Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);
