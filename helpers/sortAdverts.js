import { sortByAlphabet, sortByDate } from "./sorting/index.js";

const sortAdverts = (adverts, sortType) => {
  switch (sortType) {
    case "old":
      return sortByDate(adverts, true);
    case "start-alphabet":
      return sortByAlphabet(adverts, false);
    case "end-alphabet":
      return sortByAlphabet(adverts, true);
    default:
      return sortByDate(adverts, false);
  }
};

export default sortAdverts;
