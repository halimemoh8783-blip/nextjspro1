import type { Request, Response, NextFunction } from "express";
import * as usersService from "./users.service.js";

export function list(_req: Request, res: Response, next: NextFunction) {
  try {
    res.json(usersService.listUsers());
  } catch (error) {
    next(error);
  }
}

export function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(usersService.getUser(req.params.id as string));
  } catch (error) {
    next(error);
  }
}
