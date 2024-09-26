import express from "express";
// import postControllers from "../controllers/posts-controllers.js";
// import { validateBody } from "../decorators/index.js";
// import { addPostSchema, editPostSchema } from "../schema/post-schema.js";
// import { authorization, isEmptyBody, isValidId } from "../middleware/index.js";

const advertRouter = express.Router();

// advertRouter.get("/", authorization, postControllers.getPosts);

// advertRouter.get("/:id", authorization, isValidId, postControllers.getPostById);

// advertRouter.post(
//   "/",
//   authorization,
//   isEmptyBody,
//   validateBody(addPostSchema),
//   postControllers.addPost
// );

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
