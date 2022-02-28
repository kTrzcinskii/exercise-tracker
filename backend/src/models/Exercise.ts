import mongoose, { Document } from "mongoose";
import { UserInterface } from "./User";
export interface ExerciseInterface extends Document {
  description: string;
  duration: number;
  date: Date;
  user: UserInterface;
}

const ExerciseSchema = new mongoose.Schema<ExerciseInterface>({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "you must provide a user"],
  },
});

export default mongoose.model<ExerciseInterface>("Exercise", ExerciseSchema);
