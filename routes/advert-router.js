import express from "express";
import advertControllers from "../controllers/advert-controllers.js";
import authorization from "../middleware/authorization.js";
import upload from "../middleware/upload.js";
import isValidId from "../middleware/isValidId.js";
// import { validateBody } from "../decorators/index.js";
// import { addPostSchema, editPostSchema } from "../schema/post-schema.js";
// import { authorization, isEmptyBody, isValidId } from "../middleware/index.js";

const advertRouter = express.Router();

advertRouter.get("/", advertControllers.getFilteredAdverts);

advertRouter.get("/userAdverts", authorization, advertControllers.getUserAdverts);

advertRouter.get("/:id", authorization, isValidId, advertControllers.getAdvertById);

advertRouter.post(
  "/",
  upload.single("image"),
  authorization,
  advertControllers.addAdvert
);

// advertRouter.put(
//   "/:id",
//   authorization,
//   isValidId,
//   isEmptyBody,
//   validateBody(editPostSchema),
//   postControllers.editPost
// );

// advertRouter.delete("/:id", authorization, postControllers.deletePost);

export default advertRouter;
