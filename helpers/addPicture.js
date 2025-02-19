import { cloudinary, getCroppedPictures } from "./index.js";
import fs from "fs/promises";

const folders = {
  user: "leafofhope",
  advert: "leafofhopeAdverts",
};

const pictureSize = {
  user: [
    { width: 100, height: 100, crop: "scale" },
    { width: 75, height: 75, crop: "scale" },
    { width: 100, height: 100, crop: "scale" },
    { width: 175, height: 175, crop: "scale" },
    { width: 250, height: 250, crop: "scale" },
    { width: 300, height: 300, crop: "scale" },
    { width: 400, height: 400, crop: "scale" },
    { width: 500, height: 500, crop: "scale" },
  ],
  advert: [
    { width: 100, height: 100, crop: "scale" },
    { width: 175, height: 175, crop: "scale" },
    { width: 250, height: 250, crop: "scale" },
    { width: 300, height: 300, crop: "scale" },
    { width: 400, height: 400, crop: "scale" },
    { width: 500, height: 500, crop: "scale" },
  ],
};

const addPicture = async (req, folder) => {
  const pict = req?.file?.path || req
  const image = await cloudinary.uploader.upload(pict, {
    folder: folders[folder],
    eager: pictureSize[folder],
  });
  req?.file?.path ? await fs.unlink(req.file.path) : "";
  return getCroppedPictures(image, folder);
};


export default addPicture;
