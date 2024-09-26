import {createToken, HttpError} from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(409, "Email or password are invalid");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  
  if (!comparePassword) {
    throw HttpError(409, "Email or password are invalid");
  }
  const token = createToken(user)
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
    user: {
      _id: user._id,
      email,
      adress: user.adress,
      phone: user.phone,
      avatar: user.avatar,
    },
  });
};

export default signin;
