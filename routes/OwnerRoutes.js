import express from "express";
import { changeRoleToOwner } from "../controllers/OwnerController.js";
import { protect } from "../middleware/auth.js";

const ownerRouter = express.Router()

ownerRouter.post("/change-role", protect, changeRoleToOwner)


export default ownerRouter;