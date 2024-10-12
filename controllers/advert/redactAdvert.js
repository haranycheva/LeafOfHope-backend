import { addPicture, HttpError } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const redactAdvert = async (req, res, next) => {
  const { _id: owner } = req.user;
  const advertId = req.params.id;
  if (req.file) {
    req.body.image = await addPicture(req, "advert");
  }
  const editedAdvert = await Advert.findOneAndUpdate(
    { _id: advertId, owner },
    { ...req.body }
  );
  if (!editedAdvert) {
    throw HttpError(404, `Can not find an advert with id ${advertId}`);
  }
  res.json(editedAdvert);
};

export default redactAdvert;
