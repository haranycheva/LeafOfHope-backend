import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  const { username, email, password, adress, avatar, phone} = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  const pass = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: pass, adress, avatar, phone });
  res.status(201).json({
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
