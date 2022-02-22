import mongoose, { Document } from "mongoose";

export interface ExerciseInterface extends Document {
  username: string;
  description: string;
  duration: number;
  date: Date;
  userId: string;
}

const ExerciseSchema = new mongoose.Schema<ExerciseInterface>({
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

export default mongoose.model<ExerciseInterface>("Exercise", ExerciseSchema);
