import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { HttpError } from "../../helpers/index.js";

const { JWT_VERIFICATION } = process.env;

const resetPassword = async (req, res, next) => {
  const { resetPasswordToken } = req.params;
  const { password: newPassord } = req.body;
  try {
    jwt.verify(resetPasswordToken, JWT_VERIFICATION);
    const user = await User.findOne({ resetPasswordToken });
    if (
      !user ||
      !user.resetPasswordToken ||
      user.resetPasswordToken !== resetPasswordToken
    ) {
      throw HttpError(401, "user not found");
    }
    const comparePassword = await bcrypt.compare(newPassord, user.password);
    if (comparePassword) {
      throw HttpError(400, "New password should be different from previous");
    }
    const pass = await bcrypt.hash(newPassord, 10);
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { resetPasswordToken: "", password: pass }
    ).select("-password -token");
    if (!updatedUser) {
      throw HttpError(500, "reseting password failed");
    }
    res.json({ message: "reseting password is succesfull" });
  } catch (error) {
    throw HttpError(401, error.message);
  }
};

export default resetPassword;
