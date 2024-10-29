import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
import { emailReg, phoneReg } from "../regex/regex.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      minLength: 1,
      maxLength: 28,
      required: [true, "username is required"],
    },
    password: {
      type: String,
      minLength: 6,
      required: [true, "password is required"],
    },
    email: {
      type: String,
      match: emailReg,
      unique: true,
      required: [true, "email is required"],
    },
    avatar: {
      "very-small-175px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728879712/leafofhope/Photo_2_jxjjqh.jpg",
      },
      "small-250px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728879712/leafofhope/Photo_2_jxjjqh.jpg",
      },
      "medium-300px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728879712/leafofhope/Photo_2_jxjjqh.jpg",
      },
      "large-400px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728879723/leafofhope/Photo_3_ri0xrn.jpg",
      },
    },
    phone: {
      type: String,
      match: phoneReg,
      required: [true, "phone is required"],
    },
    adress: {
      type: String,
      required: [true, "adress is required"],
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);
userSchema.post("save", handleSaveError);
userSchema.pre("findOneAndUpdate", preUpdate);
userSchema.post("findOneAndUpdate", handleSaveError);

export const User = model("user", userSchema);
