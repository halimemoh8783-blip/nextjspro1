import { apiClient } from "@/shared/api";
import type { User } from "../types/index";

export const usersApi = {
  list(token: string) {
    return apiClient<User[]>("/users", { token });
  },
};
