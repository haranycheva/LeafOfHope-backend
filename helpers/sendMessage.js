import nodemailer from "nodemailer";
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

const sendMessage = async (user) => {
  const { username, email, verificationToken } = user;
  const message = {
    from: EMAIL_FROM,
    to: email,
    subject: "verificate email",
    text: "some text",
    html: `<p>Hi ${username} please submit your email by link : https://leafofhope-backend.onrender.com/api/auth/verificate/${verificationToken}</p>`,
  };

  return await transporter.sendMail(message);
};

export default sendMessage;
