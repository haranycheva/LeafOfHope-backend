import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";

const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;

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
      type: String,
      default: "https://res.cloudinary.com/dk3syrsg5/image/upload/v1727338464/user_default.jpg"
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
  { versionKey: false}
);
userSchema.post("save", handleSaveError);
userSchema.pre("findOneAndUpdate", preUpdate);
userSchema.post("findOneAndUpdate", handleSaveError);

export const User = model("user", userSchema);
