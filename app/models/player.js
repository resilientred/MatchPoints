import mongoose from "mongoose";
import { historySchema } from "./history";

const Schema = mongoose.Schema;

export const validatePlayer = (player) => {
  const err = {};
  let hasError = false;
  if (player.rating === "0") {
    err.rating = "Rating cannot be empty.";
    hasError = true;
  }
  if (player.name === "") {
    err.name = "Name cannot be empty.";
    hasError = true;
  }

  return [hasError, err]
}

export const playerSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, max: 3000, min: 0 },
  ratingHistory: [historySchema],
  updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});

export const Player = mongoose.model("Player", playerSchema);
