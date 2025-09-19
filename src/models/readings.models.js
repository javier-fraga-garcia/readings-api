import mongoose from "mongoose";

const readingsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      lowercase: true,
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      lowercase: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Rating is required"],
    },
    comments: { type: String, lowercase: true, trim: true },
    pages: { type: Number, required: [true, "Pages is required"], min: 1 },
    finished: { type: Boolean, default: false },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
  },
  { timestamps: true }
);

const Reading = mongoose.model("Reading", readingsSchema);

export default Reading;
