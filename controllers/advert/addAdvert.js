import addPicture from "../../helpers/addPicture.js";
import HttpError from "../../helpers/HttpError.js";
import { Advert } from "../../models/Advert.js";

const addAdvert = async (req, res) => {
  const user = req.user;
  if (req.file) {
    req.body.image = await addPicture(req, "advert");
  }
  const newAdvert = await Advert.create({
    ...req.body,
    keeper: {
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      phone: user.phone,
      adress: user.adress,
    },
    owner: user._id,
  });
  if(!newAdvert){
    throw HttpError(500, `Creating failed`);
  }
  res.status(201).json(newAdvert);
};

export default addAdvert;
