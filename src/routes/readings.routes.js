import { Router } from "express";

import validate from "../middlewares/validate.middleware.js";
import authMiddleware from "../middlewares/authorization.middleware.js";
import {
  createReadingSchema,
  updateReadingSchema,
} from "../schemas/reading.schema.js";

import {
  createReading,
  getAllReadings,
  updateReading,
} from "../controllers/readings.controllers.js";

const readingsRouter = Router();

readingsRouter.use(authMiddleware);

readingsRouter.get("/", getAllReadings);

readingsRouter.post("/", validate(createReadingSchema), createReading);

readingsRouter.put("/:id", validate(updateReadingSchema), updateReading);

export default readingsRouter;
