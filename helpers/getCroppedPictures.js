const imgProps = [
  "very-small-175px",
  "small-250px",
  "medium-300px",
  "large-400px",
];
const getCroppedPictures = ({ eager }) => {
  const result = {};
  for (const i in eager) {
    result[imgProps[i]] = eager[i].secure_url;
  }
  return result;
};

export default getCroppedPictures;
