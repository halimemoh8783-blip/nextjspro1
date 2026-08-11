import type { Request, Response, NextFunction } from "express";
import { parseBody } from "../../shared/utils/validate.js";
import * as categoriesService from "./categories.service.js";
import { createCategorySchema } from "./categories.service.js";

export function list(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(categoriesService.listCategories());
  } catch (error) {
    next(error);
  }
}

export function create(req: Request, res: Response, next: NextFunction) {
  try {
    const body = parseBody(createCategorySchema, req.body);
    const category = categoriesService.createCategory(body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
}

export function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const category = categoriesService.getCategory(req.params.id as string);
    res.json(category);
  } catch (error) {
    next(error);
  }
}
