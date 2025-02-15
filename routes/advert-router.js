import express from "express";
import advertControllers from "../controllers/advert-controllers.js";
import { authorization } from "../middleware/index.js";
import upload from "../middleware/upload.js";
import isValidId from "../middleware/isValidId.js";
import {validateBody} from "../decorators/index.js";
import { advertValidationSchema, editAdvertSchema } from "../schema/advert-schema.js";
import { changeActivityValidationSchema } from "../schema/statisctics-schema.js";

const advertRouter = express.Router();

advertRouter.get("/", advertControllers.getFilteredAdverts);

advertRouter.get("/userAdverts", authorization, advertControllers.getUserAdverts);

advertRouter.get("/:id", isValidId, advertControllers.getAdvertById);

advertRouter.post(
  "/",
  upload.single("image"),
  authorization,
  validateBody(advertValidationSchema),
  advertControllers.addAdvert
);

advertRouter.put(
  "/activity/:id",
  authorization,
  validateBody(changeActivityValidationSchema),
  advertControllers.changeActivity
);

advertRouter.put(
  "/:id",
  upload.single("image"),
  authorization,
  validateBody(editAdvertSchema),
  advertControllers.redactAdvert
);

advertRouter.delete("/:id", authorization, advertControllers.deleteAdvert);

export default advertRouter;
