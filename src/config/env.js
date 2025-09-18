import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().transform(Number),
  DATABASE_URL: z.url(),
  DB_NAME: z.string(),
  NODE_ENV: z.enum(["development", "production"]),
  JWT_SECRET: z.string(),
  JWT_EXPIRE_TIME: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
