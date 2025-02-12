import {removeEmptyProps, addPicture, HttpError} from "../../helpers/index.js";
import {translateAdvert} from "../../helpers/translation/index.js";
import { Advert } from "../../models/Advert.js";

const addAdvert = async (req, res) => {
  const user = req.user;
  if (req.file) {
    req.body.image = await addPicture(req, "advert");
  }
  if(!req.body?.lang){
    req.body.lang = "ua"
  }
  const reqBodyWithoutEmpty = removeEmptyProps(req.body)
  const translated = await translateAdvert(req.body)
  const newAdvert = await Advert.create({
    ...reqBodyWithoutEmpty,
    translated,
    active: true,
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
