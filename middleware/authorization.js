import ctrlWrapper from "../decorators/ctrlWrapper.js";
import { HttpError } from "../helpers/index.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

const {JWT_SECRET} = process.env;

export const authorization = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw HttpError(401, "authorization header not found");
  }
  console.log(authorization);
  
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401, "authorization header must be 'Bearer'");
  }
  try {
    console.log(token);
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    console.log(user);
    if (!user || !user.token || user.token !== token) {
      throw HttpError(401, "user not found");
    }
    req.user = user;
    next();
  } catch (error) {
    throw HttpError(401, error.message)
  }
};

export default ctrlWrapper(authorization);
