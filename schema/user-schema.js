import Joi from 'joi';
import { emailReg, phoneReg } from '../regex/regex.js';

export const userValidationSchema = Joi.object({
  username: Joi.string().min(1).max(40).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailReg).required(),
  phone: Joi.string().pattern(phoneReg).allow(""),
  adress: Joi.string().max(60).allow(""),
});

export const editUserSchema = Joi.object({
    username: Joi.string().min(1).max(40),
    phone: Joi.string().pattern(phoneReg).allow(""),
    adress: Joi.string().max(60).allow(""),
  });

  export const signinValidationSchema = Joi.object({
    password: Joi.string().min(6),
    email: Joi.string().pattern(emailReg),
    token_id: Joi.string(),
  });

