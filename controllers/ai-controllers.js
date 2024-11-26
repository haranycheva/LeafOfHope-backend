import ctrlWrapper from "../decorators/ctrlWrapper.js"
import {getAiChat, createAiChat, sendMessageToAi} from "./ai/index.js"

export default {
    createAiChat: ctrlWrapper(createAiChat),
    sendMessageToAi: ctrlWrapper(sendMessageToAi),
    getAiChat: ctrlWrapper(getAiChat),
}