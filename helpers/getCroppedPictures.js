const imgProps = [
  "tiny-100px",
  "very-small-175px",
  "small-250px",
  "medium-300px",
  "big-400px",
  "large-500px",
];
const getCroppedPictures = ({ eager }) => {
  const result = {};
  for (const i in eager) {
    result[imgProps[i]] = eager[i].secure_url;
  }
  return result;
};

export default getCroppedPictures;
