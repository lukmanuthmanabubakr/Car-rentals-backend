import express from "express";
import { addCar, changeRoleToOwner } from "../controllers/OwnerController.js";
import { protect } from "../middleware/auth.js";
import upload from "../middleware/Multer.js";

const ownerRouter = express.Router()

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add-car", upload.single("image"), protect, addCar)


export default ownerRouter;