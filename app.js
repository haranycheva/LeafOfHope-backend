import express from "express";
import cors from "cors";
import advertRouter from "./routes/advert-router.js";
import authRouter from "./routes/auth-router.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/advert", advertRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});

// console.log(req.body);
//   console.log(req.params);
// console.log(req.query);

export default app;
