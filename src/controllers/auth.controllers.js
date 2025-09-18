import User from "../models/user.models.js";
import { hashPassword, verifyPassword } from "../utils/passwords.js";
import { createToken } from "../utils/jwt.js";

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).json({ success: false, message: "Access Denied" });

    const isValidPassword = await verifyPassword(
      req.body.password,
      user.password
    );

    if (!isValidPassword)
      return res.status(401).json({ success: false, message: "Access Denied" });

    const token = createToken({ id: user._id });

    res.status(200).json({
      success: true,
      message: "User logged successfully",
      data: { id: user._id },
      token,
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

    const token = createToken({ id: user._id });

    res.status(201).json({
      sucess: true,
      message: "User created successfully",
      data: { id: user._id },
      token,
    });
  } catch (err) {
    next(err);
  }
};
