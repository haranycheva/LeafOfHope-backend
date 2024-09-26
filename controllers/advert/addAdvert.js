import { Advert } from "../../models/Advert.js";

const addAdvert = async (req, res) => {
  const user = req.user;
  console.log(user);
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
