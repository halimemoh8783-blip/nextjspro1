import type { Request, Response, NextFunction } from "express";
import { parseBody } from "../../shared/utils/validate.js";
import * as authService from "./auth.service.js";
import { loginSchema, registerSchema } from "./types.js";

export function login(req: Request, res: Response, next: NextFunction) {
  try {
    const body = parseBody(loginSchema, req.body);
    const result = authService.login(body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export function register(req: Request, res: Response, next: NextFunction) {
  try {
    const body = parseBody(registerSchema, req.body);
    const result = authService.register(body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export function me(req: Request, res: Response, next: NextFunction) {
  try {
    const result = authService.me(req.user!.sub);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
