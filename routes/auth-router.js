import express from "express";
import authControllers from "../controllers/auth-conrollers.js";
import { authorization, upload } from "../middleware/index.js";
import { validateBody } from "../decorators/index.js";
import {
  editUserSchema,
  signinValidationSchema,
  userValidationSchema,
} from "../schema/user-schema.js";

const authRouter = express.Router();

authRouter.post("/signupGoogle", authControllers.signup);

authRouter.post(
  "/signup/verificate",
  upload.single("avatar"),
  validateBody(userValidationSchema),
  authControllers.signupVerification
);

authRouter.post(
  "/signin",
  validateBody(signinValidationSchema),
  authControllers.signin
);

authRouter.get("/getInfo", authorization, authControllers.getInfo);

authRouter.post("/logout", authorization, authControllers.logout);

authRouter.put(
  "/",
  upload.single("avatar"),
  authorization,
  validateBody(editUserSchema),
  authControllers.redactUser
);

authRouter.put("/verificate/:verificationToken", authControllers.verificate);

authRouter.post("/pass/", authControllers.sendResetPassword);

authRouter.put("/pass/:resetPasswordToken", authControllers.resetPassword);

export default authRouter;
