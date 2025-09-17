import User from "../models/user.models.js";
import { hashPassword, verifyPassword } from "../utils/passwords.js";

export const login = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "User logged succesfully",
      data: { ...req.body },
    });
  } catch (err) {
    next(err);
  }
};

export const register = async (req, res, next) => {
  try {
    const hashPass = await hashPassword(req.body.password);

    const newUser = await User.create({
      ...req.body,
      password: hashPass,
    });

    const { password, __v, ...user } = newUser.toObject();
    res.status(201).json({
      sucess: true,
      message: "User created succesfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
