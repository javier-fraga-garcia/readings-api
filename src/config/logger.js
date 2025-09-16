import pino from "pino";

const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      singleLine: true,
      ignore: "pid,hostname",
    },
  },
});

export default logger;
