import imagekit from "../configs/imageKit.js";
import User from "../models/User.js";
import fs from "fs";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//List Car
export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    //To upload image to imagekit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const respopnse = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    // For URL Generation, works for both images and videos
    var optimizedImageUrl = imagekit.url({
      path: respopnse.filePath,
      transformation: [
        {
          width: "1280",
        },
        { quality: "auto" },
        {format: 'webp'}
      ],
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};
