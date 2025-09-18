import jwt from "jsonwebtoken";

import env from "../config/env.js";

export const createToken = (payload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRE_TIME,
  });
};

export const validateToken = (token) => {
  try {
    return jwt.verify(token, env.JWT_SECRET);
  } catch (err) {
    return false;
  }
};
