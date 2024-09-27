import express from "express";
import authControllers from "../controllers/auth-conrollers.js";
import {  authorization, upload} from "../middleware/index.js";

const authRouter = express.Router();

authRouter.post("/signup", upload.single("avatar"), authControllers.signup);

authRouter.post("/signin", authControllers.signin);

authRouter.get("/getInfo", authorization, authControllers.getInfo);

authRouter.post("/logout",authorization, authControllers.logout);

export default authRouter;