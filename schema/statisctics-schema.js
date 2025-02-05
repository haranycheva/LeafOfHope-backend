import Joi from "joi";
  
  export const changeActivityValidationSchema = Joi.object({
    active: Joi.boolean().required(),
    reason: Joi.string()
        .valid("foundOnSite", "foundOnAnotherResurses", "notFound")
        .required(),
  });