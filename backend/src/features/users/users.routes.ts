import { Router } from "express";
import { authRequired, requireRoles } from "../../shared/middleware/auth.js";
import * as usersController from "./users.controller.js";

export const usersRouter = Router();

usersRouter.use(authRequired, requireRoles("admin"));
usersRouter.get("/", usersController.list);
usersRouter.get("/:id", usersController.getById);
