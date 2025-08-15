import express from "express";
import { addCar, changeRoleToOwner } from "../controllers/OwnerController.js";
import { protect } from "../middleware/auth.js";

const ownerRouter = express.Router()

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add-car", protect, addCar)


export default ownerRouter;