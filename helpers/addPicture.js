import { cloudinary, getCroppedPictures } from "./index.js";
import fs from "fs/promises";

const folders = {
  user: "leafofhope",
  advert: "leafofhopeAdverts",
};

const addPicture = async (req, folder) => {
  const image = await cloudinary.uploader.upload(req.file.path, {
    folder: folders[folder],
    eager: [
      {width: 250, height: 250, crop: "scale"},
      {width: 300, height: 300, crop: "scale"},
      {width: 500, height: 500, crop: "scale"},

    ]
  });
  await fs.unlink(req.file.path);
  return getCroppedPictures(image);
};

export default addPicture;
