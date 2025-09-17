import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(6),
    username: z.string().min(2),
  }),
});

export const updateUserData = z.object({
  body: z.object({
    name: z.string().min(2).optional(),
    email: z.email().optional(),
    password: z.string().min(6).optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string(),
  }),
});
