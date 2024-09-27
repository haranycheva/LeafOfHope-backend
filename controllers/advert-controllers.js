import ctrlWrapper from "../decorators/ctrlWrapper.js"
import {addAdvert, getFilteredAdverts} from "./advert/index.js"

export default {
    addAdvert: ctrlWrapper(addAdvert),
    getFilteredAdverts: ctrlWrapper(getFilteredAdverts),
}