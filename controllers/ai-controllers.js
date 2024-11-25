import ctrlWrapper from "../decorators/ctrlWrapper.js"
import {createAiChat} from "./ai/index.js"
import {sendMessageToAi} from "./ai/index.js"

export default {
    createAiChat: ctrlWrapper(createAiChat),
    sendMessageToAi: ctrlWrapper(sendMessageToAi),
}