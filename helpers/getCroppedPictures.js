const imgProps= {
  leafofhope:  [
    "small-chat-avatar-45px",
    "chat-avatar-75px",
    "tiny-100px",
    "very-small-175px",
    "small-250px",
    "medium-300px",
    "big-400px",
    "large-500px",
  ],
  leafofhopeAdverts: [
    "tiny-100px",
    "very-small-175px",
    "small-250px",
    "medium-300px",
    "big-400px",
    "large-500px"
  ]
}
const getCroppedPictures = ({ eager }, folder) => {
  const result = {};
  for (const i in eager) {
    result[imgProps[folder][i]] = eager[i].secure_url;
  }
  return result;
};

export default getCroppedPictures;
