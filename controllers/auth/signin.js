import {
  createToken,
  googleAuthCheck,
  HttpError,
} from "../../helpers/index.js";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";

const signin = async (req, res, next) => {
  const { email, password, token_id } = req.body;
  if (token_id) {
    const {
      email,
      email_verified: verification,
      name: username,
      picture,
    } = await googleAuthCheck(token_id);
    const user = await User.findOne({ email });
    const token = createToken(user);
    await User.findByIdAndUpdate(user._id, { token });
    return res.json({
      token,
      user: {
        _id: user._id,
        email,
        adress: user.adress,
        phone: user.phone,
        avatar: user.avatar,
      },
    });
  }
  if (!email || !password) {
    throw HttpError(
      400,
      "wmail and password are required id you are not signing in with google"
    );
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(409, "Email or password are invalid");
  }
  if (!user.verification) {
    throw HttpError(403, "Email not verified");
  }
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw HttpError(409, "Email or password are invalid");
  }
  const token = createToken(user);
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
