import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
import { emailReg, phoneReg } from "./regex.js";

const advertSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 1,
      maxLength: 28,
      required: [true, "name is required"],
    },
    description: {
      type: String,
    },
    way: {
      type: String,
      enum: ["exchange", "give"],
      required: [true, "the way is required"],
    },
    wish: {
      type: String,
      default: "Обміняв(ла) би на будь-яку рослинку",
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dk3syrsg5/image/upload/v1727414803/PlantPhoto_m5u0t8.jpg",
    },
    light: {
      type: String,
      enum: ["many", "normal", "little"],
      required: [true, "the light property is required"],
    },
    humidity: {
      type: String,
      enum: ["high", "normal", "low"],
      required: [true, "the humidity property is required"],
    },
    lifeDuration: {
      type: String,
      enum: ["annual", "biennial", "perennial"],
      required: [true, "the lifeDuration property is required"],
    },
    temperature: {
      type: String,
      enum: ["high", "normal", "low"],
      required: [true, "the temperature property is required"],
    },
    size: {
      type: String,
      enum: ["large", "medium", "small"],
      required: [true, "the size property is required"],
    },
    alergenicity: {
      type: Boolean,
      required: [true, "the alergenicity property is required"],
    },
    keeper: {
      username: {
        type: String,
        minLength: 1,
        maxLength: 28,
        ref: "user",
        required: [true, "username is required"],
      },
      email: {
        type: String,
        match: emailReg,
        ref: "user",
        required: [true, "email is required"],
      },
      avatar: {
        type: String,
        ref: "user",
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1727338464/user_default.jpg",
      },
      phone: {
        type: String,
        match: phoneReg,
        ref: "user",
        required: [true, "phone is required"],
      },
      adress: {
        type: String,
        ref: "user",
        required: [true, "adress is required"],
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    }
  },
  { versionKey: false, timestamps: true }
);
advertSchema.post("save", handleSaveError);
advertSchema.pre("findOneAndUpdate", preUpdate);
advertSchema.post("findOneAndUpdate", handleSaveError);
export const Advert = model("advert", advertSchema);
