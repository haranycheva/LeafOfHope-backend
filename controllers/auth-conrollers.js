import { ctrlWrapper } from "../decorators/index.js";
import {
  getInfo,
  logout,
  redactUser,
  resetPassword,
  sendResetPassword,
  signin,
  signup,
  signupVerification,
  verificate,
} from "./auth/index.js";

export default {
  signup: ctrlWrapper(signup),
  signin: ctrlWrapper(signin),
  getInfo: ctrlWrapper(getInfo),
  logout: ctrlWrapper(logout),
  redactUser: ctrlWrapper(redactUser),
  signupVerification: ctrlWrapper(signupVerification),
  verificate: ctrlWrapper(verificate),
  resetPassword: ctrlWrapper(resetPassword),
  sendResetPassword: ctrlWrapper(sendResetPassword),
};
