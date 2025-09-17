import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js";
import validate from "../middlewares/validate.middleware.js";
import { createUserSchema, loginUserSchema } from "../schemas/user.schema.js";

const authRouter = Router();

authRouter.post("/login", validate(loginUserSchema), login);

authRouter.post("/register", validate(createUserSchema), register);

export default authRouter;
