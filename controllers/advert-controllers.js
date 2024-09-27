import ctrlWrapper from "../decorators/ctrlWrapper.js"
import {addAdvert, getAdvertById, getFilteredAdverts} from "./advert/index.js"

export default {
    addAdvert: ctrlWrapper(addAdvert),
    getFilteredAdverts: ctrlWrapper(getFilteredAdverts),
    getAdvertById: ctrlWrapper(getAdvertById),
}