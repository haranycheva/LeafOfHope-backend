import Joi from 'joi';
import { emailReg, phoneReg } from '../regex/regex.js';

export const userValidationSchema = Joi.object({
  username: Joi.string().min(1).max(28).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailReg).required(),
  phone: Joi.string().pattern(phoneReg).required(),
  adress: Joi.string().max(60).required(),
});

export const editUserSchema = Joi.object({
    username: Joi.string().min(1).max(28),
    phone: Joi.string().pattern(phoneReg),
    adress: Joi.string().max(60),
  });

  export const signinValidationSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailReg).required(),
  });

