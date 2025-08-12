import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"




//Generate JWT Token
const generateToken = (userId) => {
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET)
}

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
      return res.json({ success: false, message: "fill all the feilds" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password: hashedPassword})


  } catch (error) {}
};
