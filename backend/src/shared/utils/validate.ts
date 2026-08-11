import { z } from "zod";
import { AppError } from "../errors/AppError.js";

export function parseBody<T>(schema: z.ZodSchema<T>, body: unknown): T {
  const result = schema.safeParse(body);
  if (!result.success) {
    const message = result.error.issues.map((i) => i.message).join(", ");
    throw new AppError(400, message || "Invalid request body");
  }
  return result.data;
}
