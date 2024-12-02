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
      "small-chat-avatar-45px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/c_fill,w_45,h_45/v1727338464/user_default.jpg",
      },
      "chat-avatar-75px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/c_fill,w_75,h_75/v1727338464/user_default.jpg",
      },
      "tiny-100px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/c_fill,w_100,h_100/v1727338464/user_default.jpg",
      },
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
      "big-400px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728879723/leafofhope/Photo_3_ri0xrn.jpg",
      },
      "large-500px": {
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
      maxLength: 200,
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
