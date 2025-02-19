import { addPicture, createToken, googleAuthCheck, HttpError } from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signup = async (req, res, next) => {
  const { token_id } = req.body;
  const {email, email_verified: verification, name : username,  picture} = await googleAuthCheck(token_id)
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already exists");
  }
  req.body.avatar = await addPicture(picture, "user");
  const newUser = await User.create({
    username,
    email,
    avatar: req.body.avatar,
    verification,
    fromGoogle: true,
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
      avatar: newUser.avatar,
    },
  });
};

export default signup;
