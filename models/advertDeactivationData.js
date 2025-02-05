import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const advertDeactivationDataSchema = new Schema(
  {
    reason: {
        type: String,
        enum: ["foundOnSite", "foundOnAnotherResurses", "notFound"],
        required: [true, "the reason of making advert inactive is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    advertFrom: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "advert",
      },
  },
  { versionKey: false, timestamps: true }
);
advertDeactivationDataSchema.post("save", handleSaveError);
advertDeactivationDataSchema.pre("findOneAndUpdate", preUpdate);
advertDeactivationDataSchema.post("findOneAndUpdate", handleSaveError);

export const advertDeactivationData = model("advert-deactivation-data", advertDeactivationDataSchema);
