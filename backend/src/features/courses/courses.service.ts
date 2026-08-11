import { z } from "zod";
import { AppError } from "../../shared/errors/AppError.js";
import {
  categories,
  courses,
  createCourseId,
} from "../../shared/data/store.js";
import type { CreateCourseInput } from "./types.js";

export const createCourseSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  categoryId: z.string().min(1),
});

export function listCourses() {
  return courses;
}

export function createCourse(input: CreateCourseInput, teacherId: string) {
  const category = categories.find((c) => c.id === input.categoryId);
  if (!category) {
    throw new AppError(400, "Invalid category");
  }

  const course = {
    id: createCourseId(),
    title: input.title,
    description: input.description,
    categoryId: input.categoryId,
    teacherId,
    studentsCount: 0,
  };
  courses.push(course);
  return course;
}

export function getCourse(id: string) {
  const course = courses.find((c) => c.id === id);
  if (!course) {
    throw new AppError(404, "Course not found");
  }
  return course;
}
