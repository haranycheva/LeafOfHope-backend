import fs from "fs/promises";
import path from "path";

const FILE_PATH = path.resolve("posts.json");

const getAllPosts = async () => {
    const res = await fs.readFile(FILE_PATH);
    return JSON.parse(res);
  };

  export default getAllPosts