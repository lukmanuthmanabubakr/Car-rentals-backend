import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const bookingShema = new mongoose.Schema(
  {
    car: { type: ObjectId, ref: "Car", required: true },
    user: { type: ObjectId, ref: "User", required: true },
    owner: { type: ObjectId, ref: "User", required: true },
    pickupDate: {}
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingShema);

export default Booking;
