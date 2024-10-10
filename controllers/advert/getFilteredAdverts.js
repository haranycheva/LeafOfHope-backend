import { HttpError } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const getFilteredAdverts = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const whatToFilter = { ...req.query };
  delete whatToFilter.page;
  delete whatToFilter.limit;
  const totalAdverts = await Advert.countDocuments(whatToFilter);
  const result = await Advert.find(whatToFilter, "", {
    skip: (page - 1) * limit,
    limit,
  });
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  const sortedByDate = result.sort((a,b) => Date.parse(b.createdAt) -  Date.parse(a.createdAt))
  res.json({ result: sortedByDate, tottal: totalAdverts });
};
export default getFilteredAdverts;
