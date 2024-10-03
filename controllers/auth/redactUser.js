import { cloudinary, HttpError } from "../../helpers/index.js";
import { User } from "../../models/User.js";
import fs from "fs/promises";

const redactUser = async (req, res, next) => {
  const { _id} = req.user;
  if (req.file) {
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "leafofhope",
    });
    await fs.unlink(req.file.path);
    req.body.avatar = secure_url;
  }
  const editedUser = await User.findOneAndUpdate({ _id }, { ...req.body });
  if (!editedUser) {
    throw HttpError(404, `Can not find a user with id ${id}`);
  }
  res.json(editedUser)
};

export default redactUser;
