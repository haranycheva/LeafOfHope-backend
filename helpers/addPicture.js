import { cloudinary } from "./index.js";
import fs from "fs/promises";

const folders = {
  user: "leafofhope",
  advert: "leafofhopeAdverts",
};

const addPicture = async (req, folder) => {
  const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
    folder: folders[folder],
  });
  await fs.unlink(req.file.path);
  return secure_url;
};

export default addPicture;
