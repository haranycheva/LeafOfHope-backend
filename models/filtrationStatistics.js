import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const filtrationStatisticsSchema = new Schema(
  {
    way: {
      type: String,
      enum: ["exchange", "give"],
    },
    lang: {
      type: String,
      enum: ["en", "ua"],
    },
    active: {
      type: Boolean,
    },
    light: {
      type: String,
      enum: ["light-loving", "relatively light-loving", "shade-tolerant"],
    },
    care: {
      type: String,
      enum: ["picky", "unassuming"],
    },
    lifeDuration: {
      type: String,
      enum: ["short-lived", "long-lived"],
    },
    temperature: {
      type: String,
      enum: ["heat-loving", "medium", "cold-resistant"],
    },
    height: {
      type: String,
      enum: ["dwarf", "low", "average", "high", "very high"],
    },
    allergenicity: {
      type: String,
      enum: ["available", "absent"],
    },
    watering: {
      type: String,
      enum: ["three days", "week", "two weeks", "month"],
    },
    toxicity: {
      type: String,
      enum: ["very-poisonous", "highly-toxic", "toxic", "non-toxic"],
    },
    growthRate: {
      type: String,
      enum: ["fast-growing", "medium-growing", "slow-growing"],
    },
    windowDistance: {
      type: String,
      enum: ["up to 0.5m", "up to 1m", "up to 2m", "over 2m"],
    },
    substrate: {
      type: String,
      enum: ["universal", "peat", "cactus", "orchids", "palm", "other"],
    },
    plantType: {
      type: String,
      enum: ["flowering", "foliage"],
    },
    plantCondition: {
      type: String,
      enum: ["conditioned", "unconditioned"],
    },
    rarity: {
      type: String,
      enum: ["NE", "DD", "LC", "NT", "VU", "EN", "CR", "EW"],
    },
  },
  { versionKey: false, timestamps: true }
);
filtrationStatisticsSchema.post("save", handleSaveError);
filtrationStatisticsSchema.pre("findOneAndUpdate", preUpdate);
filtrationStatisticsSchema.post("findOneAndUpdate", handleSaveError);

export const filtrationStatistics = model(
  "filtration-data",
  filtrationStatisticsSchema
);
