import { ZodError, z } from "zod";

import logger from "../config/logger.js";

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      error: err.issues.map((e) => ({
        path: e.path.join("/"),
        message: e.message,
      })),
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicated value",
      key: err.keyValue,
    });
  }

  logger.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorMiddleware;
