import { Advert } from "../../models/Advert.js";

const addAdvert = async (req, res) => {
  const user = req.user;
  // const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
  //   folder: "leafofhopeAdverts",
  // });
  // await fs.unlink(req.file.path);
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
