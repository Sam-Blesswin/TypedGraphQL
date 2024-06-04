import mongoose from "mongoose";

const { Schema } = mongoose;

const gameSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  platform: { type: [String], required: true },
});

const reviewSchema = new Schema({
  id: { type: String, required: true },
  rating: { type: Number, required: true },
  content: { type: String, required: true },
  author_id: { type: String, required: true },
  game_id: { type: String, required: true },
});

const authorSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  verified: { type: Boolean, required: true },
});

export const GameModel = mongoose.model("Games", gameSchema);
export const ReviewModel = mongoose.model("Reviews", reviewSchema);
export const AuthorModel = mongoose.model("Authors", authorSchema);
