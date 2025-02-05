import { ctrlWrapper } from "../decorators/index.js";
import {
  addAdvert,
  changeActivity,
  deleteAdvert,
  getAdvertById,
  getFilteredAdverts,
  getUserAdverts,
  redactAdvert,
} from "./advert/index.js";

export default {
  addAdvert: ctrlWrapper(addAdvert),
  getFilteredAdverts: ctrlWrapper(getFilteredAdverts),
  getAdvertById: ctrlWrapper(getAdvertById),
  getUserAdverts: ctrlWrapper(getUserAdverts),
  deleteAdvert: ctrlWrapper(deleteAdvert),
  redactAdvert: ctrlWrapper(redactAdvert),
  changeActivity: ctrlWrapper(changeActivity),
};
