import type { NextFunction, Request, Response } from "express";
import { isAppError } from "../errors/AppError.js";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (isAppError(err)) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  console.error(err);
  res.status(500).json({ message: "Internal server error" });
}
