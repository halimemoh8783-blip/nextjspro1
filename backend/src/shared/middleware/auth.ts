import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.js";
import type { Role } from "../types/index.js";

export type AuthPayload = {
  sub: string;
  email: string;
  role: Role;
  name: string;
};

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";

export function signToken(payload: AuthPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function authRequired(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    next(new AppError(401, "Authentication required"));
    return;
  }

  try {
    const token = header.slice("Bearer ".length);
    req.user = jwt.verify(token, JWT_SECRET) as AuthPayload;
    next();
  } catch {
    next(new AppError(401, "Invalid or expired token"));
  }
}

export function requireRoles(...roles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      next(new AppError(401, "Authentication required"));
      return;
    }
    if (!roles.includes(req.user.role)) {
      next(new AppError(403, "Insufficient permissions"));
      return;
    }
    next();
  };
}
