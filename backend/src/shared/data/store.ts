import type { Category, Course, User } from "../types/index.js";

export const users: User[] = [
  {
    id: "u1",
    name: "Amina Admin",
    email: "admin@example.com",
    password: "password",
    role: "admin",
  },
  {
    id: "u2",
    name: "Tariq Teacher",
    email: "teacher@example.com",
    password: "password",
    role: "teacher",
  },
  {
    id: "u3",
    name: "Sara Student",
    email: "student@example.com",
    password: "password",
    role: "student",
  },
];

export const categories: Category[] = [
  {
    id: "c1",
    name: "Web Development",
    description: "Frontend and backend web technologies",
  },
  {
    id: "c2",
    name: "Data Science",
    description: "Analytics, ML, and data pipelines",
  },
  {
    id: "c3",
    name: "Design",
    description: "UI, UX, and product design",
  },
];

export const courses: Course[] = [
  {
    id: "co1",
    title: "Next.js Fundamentals",
    description: "App Router, server components, and feature architecture",
    categoryId: "c1",
    teacherId: "u2",
    studentsCount: 42,
  },
  {
    id: "co2",
    title: "TypeScript for Teams",
    description: "Strict typing patterns for large codebases",
    categoryId: "c1",
    teacherId: "u2",
    studentsCount: 28,
  },
  {
    id: "co3",
    title: "Intro to Data Visualization",
    description: "Charts, storytelling, and dashboard design",
    categoryId: "c2",
    teacherId: "u2",
    studentsCount: 35,
  },
];

let nextUserId = 4;
let nextCategoryId = 4;
let nextCourseId = 4;

export function createUserId() {
  return `u${nextUserId++}`;
}

export function createCategoryId() {
  return `c${nextCategoryId++}`;
}

export function createCourseId() {
  return `co${nextCourseId++}`;
}

export function toPublicUser(user: User) {
  const { password: _, ...publicUser } = user;
  return publicUser;
}
