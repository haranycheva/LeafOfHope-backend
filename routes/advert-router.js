import express from "express";
import advertControllers from "../controllers/advert-controllers.js";
import authorization from "../middleware/authorization.js";
import upload from "../middleware/upload.js";
// import { validateBody } from "../decorators/index.js";
// import { addPostSchema, editPostSchema } from "../schema/post-schema.js";
// import { authorization, isEmptyBody, isValidId } from "../middleware/index.js";

const advertRouter = express.Router();

advertRouter.get("/", authorization, advertControllers.getFilteredAdverts);

// advertRouter.get("/:id", authorization, isValidId, postControllers.getPostById);

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
