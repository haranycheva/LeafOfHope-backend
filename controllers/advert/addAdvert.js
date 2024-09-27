import cloudinary from "../../helpers/cloudinary.js";
import { Advert } from "../../models/Advert.js";
import fs from "fs/promises";

const addAdvert = async (req, res) => {
  const user = req.user;
  if (req.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "leafofhopeAdverts",
    });
    await fs.unlink(req.file.path);
    req.body.image = secure_url;
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
  });
  res.status(201).json(newAdvert);
};

export default addAdvert;
