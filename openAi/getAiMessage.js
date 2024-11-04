import {myOpenai} from "./index.js"

const defaultAnswer = {
  ua: "Привіт! Я твій розумний асистент! Буду радий допомогьт тобі турбуватися про твого зеленого друга!",
  en: "Hello! I'm your smart assistant! I'll be happy to help you take care of your green friend!",
};

const getAiMessage = async (messageHistory, lang) => {
  if (!messageHistory?.length) {
    const content = lang === "ua" ? defaultAnswer.ua : defaultAnswer.en;
    return { content, role: "ai" };
  }
  const completion = await myOpenai.chat.completions.create({
    model: "gpt-4o",
    messages: messageHistory,
  });
  return { content: completion.choices[0].message, role: "ai" };
};

export default getAiMessage
