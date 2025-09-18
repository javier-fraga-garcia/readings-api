import { Router } from "express";

import authMiddleware from "../middlewares/authorization.middleware.js";
import { getUserDetails } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.use(authMiddleware);

usersRouter.get("/me", getUserDetails);

export default usersRouter;
