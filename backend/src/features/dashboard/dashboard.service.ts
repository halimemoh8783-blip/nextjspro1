import {
  categories,
  courses,
  users,
} from "../../shared/data/store.js";
import type { Role } from "../../shared/types/index.js";
import type { DashboardStats } from "./types.js";

export function getDashboard(role: Role, userId: string): DashboardStats {
  if (role === "admin") {
    return {
      role,
      title: "Admin overview",
      summary: "Users, courses, and categories across the platform.",
      metrics: [
        { label: "Users", value: users.length },
        { label: "Courses", value: courses.length },
        { label: "Categories", value: categories.length },
      ],
    };
  }

  if (role === "teacher") {
    const mine = courses.filter((c) => c.teacherId === userId);
    const students = mine.reduce((sum, c) => sum + c.studentsCount, 0);
    return {
      role,
      title: "Teacher dashboard",
      summary: "Your courses and learners at a glance.",
      metrics: [
        { label: "My courses", value: mine.length },
        { label: "Students", value: students },
        { label: "Categories", value: categories.length },
      ],
    };
  }

  return {
    role,
    title: "Student dashboard",
    summary: "Browse courses and track your learning path.",
    metrics: [
      { label: "Available courses", value: courses.length },
      { label: "Categories", value: categories.length },
      { label: "Enrolled", value: 1 },
    ],
  };
}
