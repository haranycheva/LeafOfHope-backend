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
  const whatTofindObject = {
    ...whatToFilter,
    $or: [
      { name: nameReg },
      { "translated.name.transEng": nameReg },
      { "translated.name.transUa": nameReg },
    ],
    active: true,
  };
  const totalAdverts = await Advert.countDocuments(whatTofindObject);
  const result = await Advert.find(whatTofindObject, "", {
    skip: (page - 1) * limit,
    limit,
  }).sort(sortAdverts(sort));
  if (!result) {
    throw HttpError(400, `Not found`);
  }
  res.json({ result, tottal: totalAdverts });
};
export default getFilteredAdverts;
