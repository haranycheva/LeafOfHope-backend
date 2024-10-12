import { HttpError, sortAdverts } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const getFilteredAdverts = async (req, res, next) => {
  const { page = 1, limit = 10, sort = "", ...whatToFilter } = req.query;
  const totalAdverts = await Advert.countDocuments(whatToFilter);
  const result = await Advert.find(whatToFilter, "", {
    skip: (page - 1) * limit,
    limit,
  });
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  const sortedAdverts = sortAdverts(result, sort)
  res.json({ result: sortedAdverts, tottal: totalAdverts });
};
export default getFilteredAdverts;
