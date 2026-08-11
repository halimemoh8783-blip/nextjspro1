import { Router } from "express";
import { authRequired, requireRoles } from "../../shared/middleware/auth.js";
import * as categoriesController from "./categories.controller.js";

export const categoriesRouter = Router();

categoriesRouter.use(authRequired);
categoriesRouter.get("/", categoriesController.list);
categoriesRouter.get("/:id", categoriesController.getById);
categoriesRouter.post(
  "/",
  requireRoles("admin", "teacher"),
  categoriesController.create,
);
