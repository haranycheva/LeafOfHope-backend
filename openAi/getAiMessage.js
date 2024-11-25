import { defaultAnswer } from "./defaults.js";
import {myOpenai} from "./index.js"


const getAiMessage = async (messageHistory, lang) => {
  if (!messageHistory?.length) {
    const content = lang === "ua" ? defaultAnswer.ua : defaultAnswer.en;
    return { content, role: "ai" };
  }
  const completion = await myOpenai.chat.completions.create({
    model: "gpt-4o",
    messages: messageHistory,
  });
  return { content: completion.choices[0].message.content, role: "assistant" };
};

export default getAiMessage
