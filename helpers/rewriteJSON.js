import fs from "fs/promises";
import path from "path";

const FILE_PATH = path.resolve("posts.json");

const rewriteJSON = async (postsArr) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(postsArr, null, 2));
  };

  export default rewriteJSON