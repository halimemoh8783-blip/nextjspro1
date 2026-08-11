import { Router } from "express";
import { authRequired } from "../../shared/middleware/auth.js";
import * as dashboardController from "./dashboard.controller.js";

export const dashboardRouter = Router();

dashboardRouter.use(authRequired);
dashboardRouter.get("/", dashboardController.get);
