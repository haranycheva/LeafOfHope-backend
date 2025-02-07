import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const filtrationStatisticsSchema = new Schema(
  {
    way: {
      type: String,
      enum: ['',"exchange", "give"],
      default: ""
    },
    lang: {
      type: String,
      enum: ['',"en", "ua"],
      default: ""
    },
    active: {
      type: Boolean,
      default: ""
    },
    light: {
      type: String,
      enum: ['',"light-loving", "relatively light-loving", "shade-tolerant"],
      default: ""
    },
    care: {
      type: String,
      enum: ['',"picky", "unassuming"],
      default: ""
    },
    lifeDuration: {
      type: String,
      enum: ['',"short-lived", "long-lived"],
      default: ""
    },
    temperature: {
      type: String,
      enum: ['',"heat-loving", "medium", "cold-resistant"],
      default: ""
    },
    height: {
      type: String,
      enum: ['',"dwarf", "low", "average", "high", "very high"],
      default: ""
    },
    allergenicity: {
      type: String,
      enum: ['',"available", "absent"],
      default: ""
    },
    watering: {
      type: String,
      enum: ['',"three days", "week", "two weeks", "month"],
      default: ""
    },
    toxicity: {
      type: String,
      enum: ['',"very-poisonous", "highly-toxic", "toxic", "non-toxic"],
      default: ""
    },
    growthRate: {
      type: String,
      enum: ['',"fast-growing", "medium-growing", "slow-growing"],
      default: ""
    },
    windowDistance: {
      type: String,
      enum: ['',"up to 0.5m", "up to 1m", "up to 2m", "over 2m"],
      default: ""
    },
    substrate: {
      type: String,
      enum: ['',"universal", "peat", "cactus", "orchids", "palm", "other"],
      default: ""
    },
    plantType: {
      type: String,
      enum: ['',"flowering", "foliage"],
      default: ""
    },
    plantCondition: {
      type: String,
      enum: ['', "conditioned", "unconditioned"],
      default: ""
    },
    rarity: {
      type: String,
      enum: ['', "NE", "DD", "LC", "NT", "VU", "EN", "CR", "EW"],
      default: ""
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
