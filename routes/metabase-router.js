import express from "express";
import metabaseControllers from "../controllers/metabase-controllers.js";
import { authorization } from "../middleware/index.js";

const metabaseRouter = express.Router();

metabaseRouter.get("/", authorization, metabaseControllers.getMetabaseLink);

export default metabaseRouter;
