
import { addPicture, HttpError, sendMessage } from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signupVerification = async (req, res, next) => {
  const { username, email, password, adress, phone } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
    if (req.file) {
      req.body.avatar =  await addPicture(req, "user");
    }
  if(!password || password.length < 6){
    throw HttpError(409, "Password must be more than 6 symbols");
  }
  const pass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: pass,
    adress,
    avatar: req.body.avatar,
    phone,
  });
  if(!newUser){
    throw HttpError(500, "Can not create user");
  }
  const message = await sendMessage(newUser)
  if(!message){
    throw HttpError(500, "Can not send verification message");
  }
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

export default signupVerification;
