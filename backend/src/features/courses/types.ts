import type { Course } from "../../shared/types/index.js";

export type { Course };
export type CreateCourseInput = {
  title: string;
  description: string;
  categoryId: string;
};
