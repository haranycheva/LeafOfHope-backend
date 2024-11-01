const sortAdverts = (sortType) => {
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
