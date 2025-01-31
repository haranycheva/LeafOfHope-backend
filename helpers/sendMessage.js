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
    html: `<table
  style="border-collapse: collapse; width: 100%; margin: 0; padding: 0"
>
  <tr>
    <td style="background: #173414; padding: 40px 0 44px">
      <div style="margin: 0 auto; padding: 0 20px; width: 480px">
        <div style="padding: 0 0 24px;">
          <img
            src="cid:logo"
            alt="Company Logo"
            style="vertical-align: top; display: block;"
            width="121px"
            height="47px"
          />
        </div>
        <div
          style="
            color: #908880;
            font: 300 13px 'Roboto', sans-serif;
            line-height: 170%;
            background: #ffffff;
            padding: 24px;
            border-radius: 8px;
          "
        >
          <div
            style="
              color: #173414;
              font: 700 20px 'Roboto', sans-serif;
              padding: 0 0 12px;
              text-align: center;
            "
          >
            Welcome to Leaf Of Hope, ${username}! 🌿
          </div>
          <div style="text-align: center; font-size: 16px; color: #333;">
            Thank you for signing up! Before you can start exploring and exchanging plants, we need to verify your email address. Simply click the button below to complete your registration.
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a
              href="https://rockmasha.github.io/Leaf_Of_Hope/authentication.html?verification=${verificationToken}"
              target="_blank"
              rel="noopener noreferrer"
              style="
                background-color: #173414;
                border-radius: 8px;
                color: #ffffff;
                cursor: pointer;
                display: inline-block;
                font: 500 16px 'Roboto', sans-serif;
                margin: 16px 0 0;
                min-width: 180px;
                padding: 12px 24px;
                text-align: center;
                text-decoration: none;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              "
            >
              Verify My Email
            </a>
          </div>
          <div style="margin-top: 24px; text-align: center; font-size: 14px; color: #666;">
            If you didn’t create an account, you can safely ignore this email.
          </div>
        </div>
      </div>
    </td>
  </tr>
</table>

`,
    attachments: [
      {
        filename: "Logo.png",
        path: "./pictures/Logo.png", 
        cid: "logo",
      },]
  };

  return await transporter.sendMail(message);
};

export default sendMessage;
