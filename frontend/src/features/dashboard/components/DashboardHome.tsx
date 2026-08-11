"use client";

import { AdminDashboard } from "./AdminDashboard";
import { StudentDashboard } from "./StudentDashboard";
import { TeacherDashboard } from "./TeacherDashboard";
import { useDashboard } from "../hooks/useDashboard";

export function DashboardHome() {
  const { data, error, isLoading } = useDashboard();

  if (isLoading) return <p className="muted">Loading dashboard…</p>;
  if (error) return <p className="form-error">{error}</p>;
  if (!data) return null;

  if (data.role === "admin") return <AdminDashboard data={data} />;
  if (data.role === "teacher") return <TeacherDashboard data={data} />;
  return <StudentDashboard data={data} />;
}
