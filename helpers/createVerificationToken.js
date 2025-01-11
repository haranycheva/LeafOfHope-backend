import cryptoRandomString from "crypto-random-string";
import jwt from "jsonwebtoken"

const {JWT_VERIFICATION} = process.env

const createVerificationToken = () => {
  const randomStr = cryptoRandomString({ length: 16, type: "base64" });
  const token = jwt.sign({ key: randomStr }, JWT_VERIFICATION, { expiresIn: "1h" });
  return token
};

export default createVerificationToken;
