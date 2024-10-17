import Joi from "joi";

export const pictureSchema = Joi.object({
    "small-250px": Joi.string()
      .uri()
      .default(
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878869/leafofhopeAdverts/PlantPhoto_1_rvxaxr.jpg"
      ),
    "medium-300px": Joi.string()
      .uri()
      .default(
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878869/leafofhopeAdverts/PlantPhoto_1_rvxaxr.jpg"
      ),
    "large-500px": Joi.string()
      .uri()
      .default(
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878963/leafofhopeAdverts/PlantPhoto_2_tsibgm.jpg"
      ),
  });