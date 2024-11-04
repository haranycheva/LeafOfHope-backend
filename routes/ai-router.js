import express from "express";
import { authorization } from "../middleware/index.js";
import aiControllers from "../controllers/ai-controllers.js";

const aiRouter = express.Router();

aiRouter.post("/", authorization, aiControllers.createAiChat);

export default aiRouter;
