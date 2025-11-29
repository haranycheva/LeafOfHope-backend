import nodemailer from "nodemailer";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { messageTemplate } from "../messages/index.js";
const { EMAIL_API_KEY, EMAIL_FROM } = process.env;
const configOptions = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_API_KEY,
  },
};

const transporter = nodemailer.createTransport(configOptions);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const LOGO_PATH = join(ROOT_DIR, 'pictures', 'Logo.png');

const sendMessage = async (messageParams) => {
  const message = {
    from: EMAIL_FROM,
    to: messageParams.email,
    subject: messageParams.subject,
    text: messageParams.text,
    html: messageTemplate(messageParams),
    attachments: [
      {
        filename: "Logo.png",
        path: LOGO_PATH, 
        cid: "logo",
      },]
  };

  return await transporter.sendMail(message);
};

export default sendMessage;
