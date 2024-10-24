import Joi from "joi";
import { pictureSchema } from "./picture-schema.js";

export const advertValidationSchema = Joi.object({
  name: Joi.string().min(1).max(28).required(),
  description: Joi.string().allow(''),
  way: Joi.string().valid("exchange", "give").required(),
  wish: Joi.string().allow(''),
  image: pictureSchema,
  light: Joi.string().valid("many", "normal", "little").required(),
  humidity: Joi.string().valid("high", "normal", "low").required(),
  lifeDuration: Joi.string()
    .valid("annual", "biennial", "perennial")
    .required(),
  temperature: Joi.string().valid("high", "normal", "low").required(),
  size: Joi.string().valid("large", "medium", "small").required(),
  alergenicity: Joi.boolean().required(),
  attention: Joi.string().valid("many", "normal", "little", ""),
  survive: Joi.string().valid("high", "normal", "low", ""),
  state: Joi.string().valid("good", "bad", "enough", ""),
  flowering: Joi.boolean().allow(''),
  growthRate: Joi.string().valid("high", "normal", "low", ""),
  edible: Joi.boolean().allow(''),
});

export const editAdvertSchema = Joi.object({
    name: Joi.string().min(1).max(28).required(),
    description: Joi.string().optional(),
    way: Joi.string().valid("exchange", "give").required(),
    wish: Joi.string().optional(),
    image: pictureSchema.optional(),
    light: Joi.string().valid("many", "normal", "little").required(),
    humidity: Joi.string().valid("high", "normal", "low").required(),
    lifeDuration: Joi.string()
      .valid("annual", "biennial", "perennial")
      .required(),
    temperature: Joi.string().valid("high", "normal", "low").required(),
    size: Joi.string().valid("large", "medium", "small").required(),
    alergenicity: Joi.boolean().required(),
    attention: Joi.string().valid("many", "normal", "little", "").optional(),
    survive: Joi.string().valid("high", "normal", "low", "").optional(),
    state: Joi.string().valid("good", "bad", "enough", "").optional(),
    flowering: Joi.boolean().allow('').optional(),
    growthRate: Joi.string().valid("high", "normal", "low", "").optional(),
    edible: Joi.boolean().allow('').optional(),
  });

