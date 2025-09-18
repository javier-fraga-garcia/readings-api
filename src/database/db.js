import mongoose from "mongoose";

import logger from "../config/logger.js";
import env from "../config/env.js";

const connectToDb = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL, {
      dbName: env.DB_NAME,
    });
    logger.info("Connected to database");
  } catch (err) {
    logger.error(`Error connecting database ${err}`);
    process.exit(1);
  }
};

export default connectToDb;
