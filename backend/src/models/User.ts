import mongoose, { Document } from "mongoose";

export interface UserInterface extends Document {
  username: string;
}

const UserSchema = new mongoose.Schema<UserInterface>({
  username: {
    type: String,
    required: [true, "you must provide a username"],
  },
});

export default mongoose.model<UserInterface>("User", UserSchema);
