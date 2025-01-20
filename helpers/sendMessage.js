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
    html: `    <table
      style="border-collapse: collapse; width: 100%; margin: 0; padding: 0"
    >
      <tr>
        <td style="background: #173414; padding: 40px 0 44px">
          <div style="margin: 0 auto; padding: 0 20px; width: 480px">
            <div style="padding: 0 0 24px">
              <img
                src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737149706/Logo_tyqybs.svg"
                alt="Company Logo"
                style="vertical-align: top"
                width="171px"
                height="67px"
              />
            </div>
            <div
              style="
                color: #908880;
                font: 300 13px 'Roboto', sans-serif;
                line-height: 170%;
              "
            >
              <div
                style="
                  color: #fff;
                  font: 700 18px 'Roboto', sans-serif;
                  padding: 0 0 12px;
                "
              >
                Hi ${username} please submit your email by
              </div>
              <a
                href="https://rockmasha.github.io/Leaf_Of_Hope/authentication.html?verification=${verificationToken}"
                target="_blank"
                rel="noopener noreferrer"
                style="
                  background-color: #fff;
                  border-radius: 8px;
                  color: #173414;
                  cursor: pointer;
                  display: inline-block;
                  font: 500 16px 'Roboto', sans-serif;
                  margin: 16px 0 0;
                  min-width: 100px;
                  padding: 7px 40px;
                  text-align: center;
                  text-decoration: none;
                "
              >
                До консультації
              </a>
            </div>
          </div>
        </td>
      </tr>
    </table>`,
  };

  return await transporter.sendMail(message);
};

export default sendMessage;
