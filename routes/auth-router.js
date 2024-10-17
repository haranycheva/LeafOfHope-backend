import express from "express";
import authControllers from "../controllers/auth-conrollers.js";
import { authorization, upload } from "../middleware/index.js";
import { validateBody } from "../decorators/index.js";
import { userValidationSchema } from "../schema/user-schema.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  upload.single("avatar"),
  validateBody(userValidationSchema),
  authControllers.signup
);

authRouter.post("/signin", authControllers.signin);

authRouter.get("/getInfo", authorization, authControllers.getInfo);

authRouter.post("/logout", authorization, authControllers.logout);

authRouter.put(
  "/",
  upload.single("avatar"),
  authorization,
  authControllers.redactUser
);

export default authRouter;
