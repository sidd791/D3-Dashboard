import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topic : [String],
  region: String,
  city: String,
  sector: String,
  pestle: String,
  source: String,
  swot: String,
});

export const JsonData = mongoose.model("JsonData", DataSchema)
