import Joi from "joi";

export const advertValidationSchema = Joi.object({
  name: Joi.string().min(1).max(28).required(),
  description: Joi.string().max(1000).allow(""),
  lang: Joi.string().valid("en", "ua"),
  way: Joi.string().valid("exchange", "give").required(),
  wish: Joi.string().max(200).allow(""),
  light: Joi.string()
    .valid("light-loving", "relatively light-loving", "shade-tolerant")
    .required(),
  care: Joi.string().valid("picky", "unassuming").allow(""),
  lifeDuration: Joi.string().valid("short-lived", "long-lived").allow(""),
  windowDistance: Joi.string()
    .valid("up to 0.5m", "up to 1m", "up to 2m", "over 2m")
    .allow(""),
  height: Joi.string()
    .valid("dwarf", "low", "average", "high", "very high")
    .required(),
  allergenicity: Joi.string().valid("available", "absent").allow(""),
  toxicity: Joi.string()
    .valid("very-poisonous", "highly-toxic", "toxic", "non-toxic")
    .required(),
  growthRate: Joi.string()
    .valid("fast-growing", "medium-growing", "slow-growing")
    .allow(""),
  substrate: Joi.string()
    .valid("universal", "peat", "cactus", "orchids", "palm", "other")
    .allow(""),
  plantType: Joi.string().valid("flowering", "foliage").required(),
  plantCondition: Joi.string().valid("conditioned", "unconditioned").required(),
  temperature: Joi.string().valid("heat-loving", "cold-resisted").required(),
  watering: Joi.string()
    .valid("three days", "week", "two weeks", "month")
    .required(),
});

export const editAdvertSchema = Joi.object({
  name: Joi.string().min(1).max(28),
  description: Joi.string().max(1000).allow(""),
  way: Joi.string().valid("exchange", "give"),
  lang: Joi.string().valid("en", "ua"),
  wish: Joi.string().max(200).allow(""),
  active: Joi.boolean(),
  light: Joi.string().valid(
    "light-loving",
    "relatively light-loving",
    "shade-tolerant"
  ),
  care: Joi.string().valid("picky", "unassuming").allow(""),
  lifeDuration: Joi.string().valid("short-lived", "long-lived").allow(""),
  windowDistance: Joi.string()
    .valid("up to 0.5m", "up to 1m", "up to 2m", "over 2m")
    .allow(""),
  height: Joi.string().valid("dwarf", "low", "average", "high", "very high"),
  allergenicity: Joi.string().valid("available", "absent").allow(""),
  toxicity: Joi.string().valid(
    "very-poisonous",
    "highly-toxic",
    "toxic",
    "non-toxic"
  ),
  growthRate: Joi.string()
    .valid("fast-growing", "medium-growing", "slow-growing")
    .allow(""),
  substrate: Joi.string()
    .valid("universal", "peat", "cactus", "orchids", "palm", "other")
    .allow(""),
  plantType: Joi.string().valid("flowering", "foliage"),
  plantCondition: Joi.string().valid("conditioned", "unconditioned"),
  temperature: Joi.string().valid("heat-loving", "cold-resisted"),
  watering: Joi.string().valid(
    "three days",
    "week",
    "two weeks",
    "month"
  ),
});
