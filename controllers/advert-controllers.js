import ctrlWrapper from "../decorators/ctrlWrapper.js"
import {addAdvert} from "./advert/index.js"

export default {
    addAdvert: ctrlWrapper(addAdvert),
}