import { validateToken } from "../utils/jwt.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader &&
    authHeader.startsWith("Bearer") &&
    authHeader.split(" ").at(1);

  if (!token)
    return res.status(401).json({ success: false, message: "Access Denied" });

  const user = validateToken(token);
  if (!user)
    return res.status(401).json({ success: false, message: "Access Denied" });

  req.user = user;
  next();
};

export default authMiddleware;
