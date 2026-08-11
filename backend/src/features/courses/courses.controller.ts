import type { Request, Response, NextFunction } from "express";
import { parseBody } from "../../shared/utils/validate.js";
import * as coursesService from "./courses.service.js";
import { createCourseSchema } from "./courses.service.js";

export function list(_req: Request, res: Response, next: NextFunction) {
  try {
    res.json(coursesService.listCourses());
  } catch (error) {
    next(error);
  }
}

export function create(req: Request, res: Response, next: NextFunction) {
  try {
    const body = parseBody(createCourseSchema, req.body);
    const course = coursesService.createCourse(body, req.user!.sub);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
}

export function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const course = coursesService.getCourse(req.params.id as string);
    res.json(course);
  } catch (error) {
    next(error);
  }
}
