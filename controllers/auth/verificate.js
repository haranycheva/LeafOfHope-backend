import { createToken, HttpError } from "../../helpers/index.js";
import { User } from "../../models/User.js";
import jwt from "jsonwebtoken"

const { JWT_VERIFICATION } = process.env;

const verificate = async (req, res, next) => {
  const { verificationToken } = req.params;
  try {
    jwt.verify(verificationToken, JWT_VERIFICATION);
    const user = await User.findOne({verificationToken});
    if (
      !user ||
      !user.verificationToken ||
      user.verificationToken !== verificationToken
    ) {
      throw HttpError(401, "user not found");
    }
    const token = createToken(user)
    const updatedUser = await User.findOneAndUpdate({_id: user._id}, {verificationToken: "", token, verification: true}).select("-password -token");
    if(!updatedUser){
        throw HttpError(500, "can not update user information");
    }
    res.json({token, user: updatedUser})
  } catch (error) {
    throw HttpError(401, error.message);
  }
};

export default verificate;
