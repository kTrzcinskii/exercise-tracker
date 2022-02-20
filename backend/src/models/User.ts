import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "you must provide a username"],
  },
});

export default mongoose.model("User", UserSchema);
