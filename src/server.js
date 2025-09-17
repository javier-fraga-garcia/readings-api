import express from "express";

import "dotenv/config";

import env from "./config/env.js";
import logger from "./config/logger.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import errorMiddelware from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/db.js";

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/auth", authRouter);

app.get("/api/health", (req, res) => {
  return res.status(200).json({ success: true, message: "API is running" });
});

app.use(errorMiddelware);

app.listen(env.PORT, async () => {
  await connectToDatabase();
  logger.info(`API is listening on http://localhost:${env.PORT}`);
});
