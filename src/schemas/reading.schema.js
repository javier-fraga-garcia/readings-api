import { z } from "zod";

export const createReadingSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    rating: z.number().min(1).max(5),
    comments: z.string().optional(),
    pages: z.number().min(1),
    finished: z.boolean().optional(),
  }),
});

export const updateReadingSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    title: z.string().min(1).optional(),
    author: z.string().min(1).optional(),
    rating: z.number().min(1).max(5).optional(),
    comments: z.string().optional(),
    pages: z.number().min(1).optional(),
    finished: z.boolean().optional(),
  }),
});
