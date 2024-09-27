import { HttpError } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const getFilteredAdverts = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const whatToFilter = {};
  for (const prop in req.body) {
    if (req.body[prop]) {
      whatToFilter[prop] = req.body[prop];
    }
  }
  const totalAdverts = await Advert.countDocuments(whatToFilter);
  const result = await Advert.find(whatToFilter, "", {
    skip: (page - 1) * limit,
    limit,
  });
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  res.json({ result: result, tottal: totalAdverts });
};
export default getFilteredAdverts;
