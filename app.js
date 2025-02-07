import express from "express";
import cors from "cors";
import advertRouter from "./routes/advert-router.js";
import authRouter from "./routes/auth-router.js";
import swaggerDocument from "./swagger.json" with { type: "json" };
import swaggerui from "swagger-ui-express";
import aiRouter from "./routes/ai-router.js";
import metabaseRouter from "./routes/metabase-router.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/advert", advertRouter);
app.use("/api/auth", authRouter);
app.use("/api/ai-chat", aiRouter)
app.use("/api/metabase", metabaseRouter);

app.use("/api/docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status ? err.status : 500).json({ message: err.message });
});

export default app;
