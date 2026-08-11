import type { ApiErrorBody } from "./types";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function getErrorMessage(error: unknown, fallback = "Something went wrong") {
  if (error instanceof ApiError) return error.message;
  if (error instanceof Error) return error.message;
  return fallback;
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function parseErrorBody(body: unknown): string | undefined {
  if (body && typeof body === "object" && "message" in body) {
    return (body as ApiErrorBody).message;
  }
  return undefined;
}
