import mongoose from "mongoose";
import { historySchema } from "./history";

const Schema = mongoose.Schema;

export const playerSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, max: 3000, min: 0 },
  ratingHistory: [historySchema],
  updated_at: { type: Date, default: Date.now },
  associated_clubs: { type: Array, default: [] }
});

export const Player = mongoose.model("Player", playerSchema);
