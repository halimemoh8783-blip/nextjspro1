import { apiClient } from "@/shared/api";
import type { DashboardStats } from "../types/index";

export const dashboardApi = {
  get(token: string) {
    return apiClient<DashboardStats>("/dashboard", { token });
  },
};
