import express from "express";
import authControllers from "../controllers/auth-conrollers.js";
import {  authorization} from "../middleware/index.js";

const authRouter = express.Router();

authRouter.post("/signup", authControllers.signup);

authRouter.post("/signin", authControllers.signin);

authRouter.get("/getInfo", authorization, authControllers.getInfo);

authRouter.post("/logout",authorization, authControllers.logout);

export default authRouter;