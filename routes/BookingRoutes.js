import express from "express"
import { checkAvailabilityOfCar } from "../controllers/BookingController.js";

const bookingRouter = express.Router();

bookingRouter.post('check-availability', checkAvailabilityOfCar)
bookingRouter.post('check-availability', checkAvailabilityOfCar)