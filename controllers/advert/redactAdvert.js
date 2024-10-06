import { cloudinary, HttpError } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";
import fs from "fs/promises";

const redactAdvert = async (req, res, next) => {
  const { _id: owner } = req.user;
  const advertId = req.params.id;
  if (req.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "leafofhopeAdverts",
    });
    await fs.unlink(req.file.path);
    req.body.image = secure_url;
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
