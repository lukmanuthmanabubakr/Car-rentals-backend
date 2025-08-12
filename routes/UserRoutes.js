import express from "express";
import { getUser, loginUser, RegisterUser } from "../controllers/UserController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, getUser);


export default userRouter;
