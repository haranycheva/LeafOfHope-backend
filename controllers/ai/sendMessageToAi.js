import { AiChat } from "../../models/AiChat.js";
import { getAiMessage } from "../../openAi/index.js";

const sendMessageToAi = async (req, res, next) => {
  const { lang, message: userMessage } = req.body;
  const user = req.user;
  console.log(req.body)
  const aiChat = await AiChat.findOne({ owner: user._id });
  if (!aiChat) {
    throw HttpError(404, "User`s chat does not exist");
  }
  const userMessageObj = { content: userMessage, role: "user" };
  const aiAnswer = await getAiMessage(
    [...aiChat.messagesForAi, userMessageObj],
    lang
  );
  const updatedAiChat = await AiChat.findByIdAndUpdate(
    { owner: user._id, _id: aiChat._id },
    {
      messages: [...aiChat.messages, userMessageObj, aiAnswer],
      messagesForAi: [...aiChat.messagesForAi, userMessageObj, aiAnswer],
    }
  ).select("-messagesForAi");
  if(!updatedAiChat){
    throw HttpError(500, "Can not send message");
  }
  res.json(aiAnswer);
};

export default sendMessageToAi
