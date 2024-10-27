import { sortByAlphabet, sortByDate } from "./sorting/index.js";

// const sortAdverts = (adverts, sortType) => {
//   switch (sortType) {
//     case "old":
//       return sortByDate(adverts, true);
//     case "start-alphabet":
//       return sortByAlphabet(adverts, false);
//     case "end-alphabet":
//       return sortByAlphabet(adverts, true);
//     default:
//       return sortByDate(adverts, false);
//   }
// };

const sortAdverts = ( sortType) => {
  switch (sortType) {
    case "old":
      return { createdAt: 1 };
    case "start-alphabet":
      return {name: 1};
    case "end-alphabet":
      return {name: -1};
    default:
      return { createdAt: -1 };
  }
};

export default sortAdverts;
