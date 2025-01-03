
import { addPicture, createToken, HttpError } from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
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
