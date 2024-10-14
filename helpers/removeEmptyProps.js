const removeEmptyProps = (obj) => {
  const newObj = {};
  for (const prop in obj) {
    if (obj[prop]) {
        newObj[prop] = obj[prop];
    }
  }
  return newObj
};

export default removeEmptyProps;
