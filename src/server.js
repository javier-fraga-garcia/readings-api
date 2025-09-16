import express from "express";

import "dotenv/config";

import env from "./config/env.js";
import logger from "./config/logger.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use(loggerMiddleware);
app.use("/api/auth", authRouter);

app.get("/api/health", (req, res) => {
  return res.status(200).json({ success: true, message: "API is running" });
});

app.listen(env.PORT, () => {
  logger.info(`API is listening on http://localhost:${env.PORT}`);
});
