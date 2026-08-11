export type Role = "admin" | "teacher" | "student";

export type DashboardStats = {
  role: Role;
  title: string;
  summary: string;
  metrics: { label: string; value: number }[];
};
