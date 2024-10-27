import { HttpError, sortAdverts } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const getFilteredAdverts = async (req, res, next) => {
  const {
    page = 1,
    limit = 10,
    name = "",
    sort = "",
    ...whatToFilter
  } = req.query;
  const nameReg = new RegExp(name, "i");
  const totalAdverts = await Advert.countDocuments({
    ...whatToFilter,
    name: nameReg,
  });
  const result = await Advert.find({ ...whatToFilter, name: nameReg }, "", {
    skip: (page - 1) * limit,
    limit,
  }).sort(sortAdverts(sort));
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  // const sortedAdverts = sortAdverts(result, sort);
  res.json({ result, tottal: totalAdverts });
};
export default getFilteredAdverts;
