import type { Request, Response, NextFunction } from "express";
import * as dashboardService from "./dashboard.service.js";

export function get(_req: Request, res: Response, next: NextFunction) {
  try {
    const { role, sub } = _req.user!;
    res.json(dashboardService.getDashboard(role, sub));
  } catch (error) {
    next(error);
  }
}
