import type { Role } from "../../shared/types/index.js";

export type DashboardStats = {
  role: Role;
  title: string;
  summary: string;
  metrics: { label: string; value: number }[];
};
