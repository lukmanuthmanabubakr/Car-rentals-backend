import express from "express"
import { checkAvailabilityOfCar } from "../controllers/BookingController";

const bookingRouter = express.Router();

bookingRouter.post('check-availability', checkAvailabilityOfCar)