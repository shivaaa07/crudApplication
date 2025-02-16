import mongoose, { Schema } from "mongoose";
import { User } from "./registerUser.model.js";

const feedbackSchema = new Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);
