import Reading from "../models/readings.models.js";

export const getAllReadings = async (req, res, next) => {
  const userId = req.user.id;

  const readings = await Reading.find({ owner: userId }).select("-__v");

  return res.status(200).json({ success: true, data: readings });
};

export const createReading = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const reading = await Reading.create({ owner: userId, ...req.body });

    res.status(201).json({
      success: true,
      message: "Reading created",
      data: { id: reading._id },
    });
  } catch (err) {
    next(err);
  }
};

export const updateReading = async (req, res, next) => {
  try {
    const { id } = req.params;
    const owner = req.user.id;
    const reading = await Reading.findOneAndUpdate(
      { _id: id, owner },
      { ...req.body },
      { new: true }
    );

    if (!reading)
      return res
        .status(404)
        .json({ success: false, message: `Reading with ID #${id} not found` });

    return res
      .status(200)
      .json({ success: true, message: "Reading updated", data: reading });
  } catch (err) {
    next(err);
  }
};
