import { model, Schema } from "mongoose";
import { handleSaveError, preUpdate } from "./hooks.js";
import { emailReg, phoneReg } from "../regex/regex.js";

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
      maxLength: 1000,
    },
    way: {
      type: String,
      enum: ["exchange", "give"],
      required: [true, "the way is required"],
    },
    wish: {
      type: String,
      maxLength: 200,
    },
    translated: {
      name: {
        transEng: {
          type: String,
        },
        transUa: {
          type: String,
        },
      },
      description: {
        transEng: {
          type: String,
        },
        transUa: {
          type: String,
        },
      },
      wish: {
        transEng: {
          type: String,
        },
        transUa: {
          type: String,
        },
      },
    },
    lang: {
      type: String,
      enum: ["en", "ua"],
      required: [true, "the language property is required"]
    },
    active: {
      type: Boolean,
      required: [true, "the active property is required"],
    },
    image: {
      "tiny-100px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/c_scale,h_100,w_100/v1727414803/PlantPhoto_m5u0t8.jpg",
      },
      "very-small-175px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878869/leafofhopeAdverts/PlantPhoto_1_rvxaxr.jpg",
      },
      "small-250px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878869/leafofhopeAdverts/PlantPhoto_1_rvxaxr.jpg",
      },
      "medium-300px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878869/leafofhopeAdverts/PlantPhoto_1_rvxaxr.jpg",
      },
      "big-400px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878963/leafofhopeAdverts/PlantPhoto_2_tsibgm.jpg",
      },
      "large-500px": {
        type: String,
        default:
          "https://res.cloudinary.com/dk3syrsg5/image/upload/v1728878963/leafofhopeAdverts/PlantPhoto_2_tsibgm.jpg",
      },
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
    attention: {
      type: String,
      enum: ["many", "normal", "little"],
    },
    survive: {
      type: String,
      enum: ["high", "normal", "low"],
    },
    state: {
      type: String,
      enum: ["good", "bad", "enough"],
    },
    flowering: {
      type: Boolean,
    },
    growthRate: {
      type: String,
      enum: ["high", "normal", "low"],
    },
    edible: {
      type: Boolean,
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
        ref: "user",
        required: [true, "phone is required"],
      },
      adress: {
        type: String,
        maxLength: 60,
        ref: "user",
        required: [true, "adress is required"],
      },
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
export const Advert = model("advert", advertSchema);
