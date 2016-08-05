import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const historySchema = new Schema({
  date: Date,
  newRating: Number,
  ratingChange: Number
});

export const History = mongoose.model("History", historySchema);
