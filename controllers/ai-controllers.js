import ctrlWrapper from "../decorators/ctrlWrapper.js"
import {createAiChat} from "./ai/index.js"

export default {
    createAiChat: ctrlWrapper(createAiChat),
}