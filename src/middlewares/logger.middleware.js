import pinoHttp from "pino-http";

import logger from "../config/logger.js";

const loggerMiddleware = pinoHttp({
  logger,
  customLogLevel: function (res) {
    if (res.statusCode >= 500) return "error";
    if (res.statusCode >= 400) return "warn";
    return "info";
  },
  serializers: {
    req: () => undefined,
    res: () => undefined,
  },
  customSuccessMessage: function (req, res) {
    return `${req.method} ${req.url} ${res.statusCode}`;
  },
});

export default loggerMiddleware;
