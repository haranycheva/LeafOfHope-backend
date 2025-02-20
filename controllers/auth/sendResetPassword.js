import { createVerificationToken, sendMessage } from "../../helpers/index.js";
import {forgotPassword} from "../../messages/index.js";
import { User } from "../../models/User.js";

const sendResetPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(400, "Email is invalid");
  }
  const passwordToken = createVerificationToken();
  const updatedUser = await User.findOneAndUpdate(
    { _id: user._id },
    { resetPasswordToken: passwordToken }
  ).select("-password -token");

  if (!updatedUser) {
    throw HttpError(500, "reseting password failed");
  }
  const message = await sendMessage(forgotPassword(user, passwordToken));
  if (!message) {
    throw HttpError(500, "Can not send message");
  }
  res.json({ message: "The congirm email has been sended" });
};

export default sendResetPassword;
