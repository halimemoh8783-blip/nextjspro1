import { Router } from "express";
import { authRequired, requireRoles } from "../../shared/middleware/auth.js";
import * as coursesController from "./courses.controller.js";

export const coursesRouter = Router();

coursesRouter.use(authRequired);
coursesRouter.get("/", coursesController.list);
coursesRouter.get("/:id", coursesController.getById);
coursesRouter.post(
  "/",
  requireRoles("admin", "teacher"),
  coursesController.create,
);
