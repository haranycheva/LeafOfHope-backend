import {HttpError} from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const getUserAdverts = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const totalAdverts = await Advert.countDocuments({owner:_id});
  const result = await Advert.find({owner:_id} , {
    skip: (page - 1) * limit,
    limit,
  });
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  res.json({ result: result, tottal: totalAdverts });
};

export default getUserAdverts
