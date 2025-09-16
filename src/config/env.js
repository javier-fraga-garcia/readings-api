import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().transform(Number),
  DATABASE_URL: z.url(),
  NODE_ENV: z.enum(["development", "production"]),
});

const env = envSchema.parse(process.env);

export default env;
