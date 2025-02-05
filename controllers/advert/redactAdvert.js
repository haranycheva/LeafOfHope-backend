import { addPicture, HttpError, removeEmptyProps } from "../../helpers/index.js";
import {translateEditedValues} from "../../helpers/translation/index.js";
import { Advert } from "../../models/Advert.js";

const redactAdvert = async (req, res, next) => {
  const { _id: owner } = req.user;
  const advertId = req.params.id;
  if (req.body.active) {
    throw HttpError(400, `Use another link for making advert inactive or active`);
  }
  if (req.file) {
    req.body.image = await addPicture(req, "advert");
  }
  const reqBodyWithoutEmpty = removeEmptyProps(req.body)
  const translated = await translateEditedValues(reqBodyWithoutEmpty, advertId)
  const editedAdvert = await Advert.findOneAndUpdate(
    { _id: advertId, owner },
    { ...reqBodyWithoutEmpty, translated}
  );
  if (!editedAdvert) {
    throw HttpError(404, `Can not find an advert with id ${advertId}`);
  }
  res.json(editedAdvert);
};

export default redactAdvert;
