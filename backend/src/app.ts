import cors from "cors";
import express from "express";
import { authRouter } from "./features/auth/auth.routes.js";
import { categoriesRouter } from "./features/categories/categories.routes.js";
import { coursesRouter } from "./features/courses/courses.routes.js";
import { dashboardRouter } from "./features/dashboard/dashboard.routes.js";
import { usersRouter } from "./features/users/users.routes.js";
import { errorHandler } from "./shared/middleware/errorHandler.js";

export function createApp() {
  const app = express();
  const origin = process.env.CORS_ORIGIN ?? "http://localhost:3000";

  app.use(cors({ origin, credentials: true }));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.use("/api/auth", authRouter);
  app.use("/api/categories", categoriesRouter);
  app.use("/api/courses", coursesRouter);
  app.use("/api/dashboard", dashboardRouter);
  app.use("/api/users", usersRouter);

  app.use(errorHandler);

  return app;
}
