import { log } from "console";
import { cloudinary, createToken, HttpError } from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";
import fs from "fs/promises";

const signup = async (req, res, next) => {
  const { username, email, password, adress, phone } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  
  if (req.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "leafofhope",
    });
    await fs.unlink(req.file.path);
    req.body.avatar = secure_url;
  }
  const pass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: pass,
    adress,
    avatar: req.body.avatar,
    phone,
  }).then((res) => {
    const token = createToken(res);
    return User.findByIdAndUpdate(res._id, { token });
  });
  res.status(201).json({
    token: newUser.token,
    user: {
      email,
      _id: newUser._id,
      username: newUser.username,
      adress: newUser.adress,
      phone: newUser.phone,
      avatar: newUser.avatar,
    },
  });
};

export default signup;
