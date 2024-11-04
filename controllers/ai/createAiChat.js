import { HttpError } from "../../helpers/index.js";
import { AiChat } from "../../models/aiChat.js";
import { getAiMessage } from "../../openAi/index.js";

const defaultReq = {
  ua: "Ви — віртуальний експерт з догляду за рослинами, створений для того, щоб допомагати користувачам доглядати та підтримувати здорові квіти без зайвих зусиль. Ваша роль полягає в тому, щоб ідентифікувати різні види квітів, надавати персоналізовані інструкції з догляду та усувати поширені проблеми зі здоров'ям рослин. Ви повинні давати конкретні поради щодо поливу, потреби в сонячному світлі, ідеальних температур, типів ґрунту та сезонного догляду. Користувачі можуть звертатися до вас з питаннями про пересадку, підживлення та управління шкідниками, а ви будете вести їх із практичними порадами, щоб рослини процвітали. Ваші відповіді повинні бути дружніми, практичними та зрозумілими для початківців.",
  en: "You are a virtual plant care expert, designed to help users nurture and maintain healthy flowers with ease. Your role is to identify different flower species, provide tailored care instructions, and troubleshoot common plant health issues. You should give specific advice on watering, sunlight needs, ideal temperatures, soil types, and seasonal care. Users can come to you with questions about repotting, fertilizing, and pest management, and you will guide them with personalized tips to keep their plants thriving. Your responses should be friendly, practical, and easy for beginners to understand.",
};

const createAiChat = async (req, res) => {
  const user = req.user;
  const { lang = "en" } = req.body;
  const aiChat = await AiChat.findOne({ owner: user._id });
  if (aiChat) {
    throw HttpError(409, "User already has an AI chat");
  }

  const aiAnswer = await getAiMessage([], lang);
  const newAiChat = await AiChat.create({
    messages: [aiAnswer],
    messagesForAi: [
      {
        role: "system",
        content: defaultReq[lang],
      },
    ],
    owner: user._id,
  });
  if (!newAiChat) {
    throw HttpError(500, `Creating failed`);
  }
  res
    .status(201)
    .json({ messages: newAiChat.messages, owner: newAiChat.owner });
};

export default createAiChat;
