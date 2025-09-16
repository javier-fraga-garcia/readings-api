import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.status(200).json({ sucess: true, message: "Login" });
});

authRouter.post("/register", (req, res) => {
  res.status(200).json({ sucess: true, message: "Register" });
});

export default authRouter;
