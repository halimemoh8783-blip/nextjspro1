import { Router } from "express";
import { authRequired } from "../../shared/middleware/auth.js";
import * as authController from "./auth.controller.js";

export const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get("/me", authRequired, authController.me);
