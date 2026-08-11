import { z } from "zod";
import { AppError } from "../../shared/errors/AppError.js";
import {
  categories,
  createCategoryId,
} from "../../shared/data/store.js";
import type { CreateCategoryInput } from "./types.js";

export const createCategorySchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
});

export function listCategories() {
  return categories;
}

export function createCategory(input: CreateCategoryInput) {
  const category = {
    id: createCategoryId(),
    name: input.name,
    description: input.description,
  };
  categories.push(category);
  return category;
}

export function getCategory(id: string) {
  const category = categories.find((c) => c.id === id);
  if (!category) {
    throw new AppError(404, "Category not found");
  }
  return category;
}
