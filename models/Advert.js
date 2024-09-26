import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const advertSchema = new Schema(
    {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
advertSchema.post("save", handleSaveError);
advertSchema.pre("findOneAndUpdate", preUpdate);
advertSchema.post("findOneAndUpdate", handleSaveError);
export const Advert = model("post", advertSchema);
