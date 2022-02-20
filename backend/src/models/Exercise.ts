import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "you must provide a username"],
  },
  description: {
    type: String,
    required: [true, "you must provide a description"],
  },
  duration: {
    type: Number,
    required: [true, "you must provide a duration"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: [true, "you must provide a user id"],
  },
});

export default mongoose.model("Exercise", ExerciseSchema);
