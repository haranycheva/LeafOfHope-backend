import {HttpError} from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const getAdvertById = async (req, res, next) => {
  const advertId = req.params.id;
  const result = await Advert.findOne({ _id: advertId});
  if (!result) {
    throw HttpError(404, `Can not find post with id = ${advertId}`);
  }
  res.json(result);
};

export default getAdvertById;

// const getPostById = async (req, res) => {
//     const { _id: owner } = req.user;
//     const postId = req.params.id;
//     const result = await Post.findOne({_id: postId, owner}).populate("owner", "-password");
//     if(!result){
//       throw HttpError(404, `Can not find post with id = ${postId}`)
//     }
//     res.json(result);
//   };
