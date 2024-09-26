import app from "./app.js"
import mongoose from 'mongoose';
// import "dotenv/config"

const {DB_HOST} = process.env

mongoose.connect(DB_HOST).then(() => {
  console.log("DB connect")
  app.listen(3003);
}).catch((err) => {
  console.log(err.message); 
  process.exit(1)
})



// vjvtqKgHa43kA0VZ