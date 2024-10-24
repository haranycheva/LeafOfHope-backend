import express from "express";
import cors from "cors";
import advertRouter from "./routes/advert-router.js";
import authRouter from "./routes/auth-router.js";
import swaggerjsdoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/advert", advertRouter);
app.use("/api/auth", authRouter);

// const options = {

// }
// const spacs = swaggerjsdoc();

// app.use("/api/docs", swaggerui.serve, swaggerui.setup(spacs));
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status ? err.status : 500).json({ message: err.message });
});

export default app;
