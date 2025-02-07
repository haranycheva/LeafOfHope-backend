import { HttpError } from "../../helpers/index.js";
import jwt from "jsonwebtoken";

const { METABASE_SITE_URL, METABASE_SECRET_KEY } = process.env;

const getMetabaseLink = (req, res, next) => {
  const { role } = req.user;
  if (role != "admin") {
    throw HttpError(403, "Only admin user can see statistics");
  }
  const payload = {
    resource: { dashboard: 33 },
    params: {},
    exp: Math.round(Date.now() / 1000) + 10 * 60,
  };
  const token = jwt.sign(payload, METABASE_SECRET_KEY);
  const iframeUrl =
    METABASE_SITE_URL +
    "/embed/dashboard/" +
    token +
    "#bordered=true&titled=true";
  res.json({ iframeUrl });
};

export default getMetabaseLink
