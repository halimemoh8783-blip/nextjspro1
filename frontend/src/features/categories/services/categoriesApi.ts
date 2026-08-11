import { apiClient } from "@/shared/api";
import type { Category, CreateCategoryInput } from "../types/index";

export const categoriesApi = {
  list(token: string) {
    return apiClient<Category[]>("/categories", { token });
  },
  create(token: string, input: CreateCategoryInput) {
    return apiClient<Category>("/categories", {
      method: "POST",
      token,
      body: input,
    });
  },
};
