import { translate } from "google-translate-api-browser";

const translateAdvert = async ({ name, description = "", wish = "" }) => {
  const toTranslate = { name, description, wish };
  const translated = {};
  for (const key in toTranslate) {
    if (toTranslate[key]) {
      const { text: transEng } = await translate(toTranslate[key], {
        to: "en",
        corsUrl: "http://cors-anywhere.herokuapp.com/",
      });
      const { text: transUa } = await translate(toTranslate[key], {
        to: "uk",
        corsUrl: "http://cors-anywhere.herokuapp.com/",
      });
      translated[key] = { transEng, transUa };
    }
  }
  return translated;
};

export default translateAdvert;
