import Joi from 'joi';
import { emailReg, phoneReg } from '../regex/regex.js';
import { pictureSchema } from './picture-schema.js';

export const userValidationSchema = Joi.object({
  username: Joi.string().min(1).max(28).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailReg).required(),
  avatar: pictureSchema.optional(),
  phone: Joi.string().pattern(phoneReg).required(),
  adress: Joi.string().required(),
  token: Joi.string().optional().default(''),
});