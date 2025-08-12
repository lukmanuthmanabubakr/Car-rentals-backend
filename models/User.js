import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
    nmae: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["owner", "user"], default: "user" },
    image: { type: String, default: "" },
  },
  {
    timeStamp: true,
  }
);

const User = mongoose.model("User", userShema);

export default User;
