import User from "../models/user.models.js";

export const getUserDetails = async (req, res, next) => {
  try {
    const dbUser = await User.findById(req.user.id);

    const { password, __v, ...user } = dbUser.toObject();
    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
