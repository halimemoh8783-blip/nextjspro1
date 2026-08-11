import { apiClient } from "@/shared/api";
import type { Course, CreateCourseInput } from "../types/index";

export const coursesApi = {
  list(token: string) {
    return apiClient<Course[]>("/courses", { token });
  },
  create(token: string, input: CreateCourseInput) {
    return apiClient<Course>("/courses", {
      method: "POST",
      token,
      body: input,
    });
  },
};
