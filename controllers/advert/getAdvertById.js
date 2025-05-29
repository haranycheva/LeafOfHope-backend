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

