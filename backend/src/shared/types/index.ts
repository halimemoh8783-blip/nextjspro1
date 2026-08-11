export type Role = "admin" | "teacher" | "student";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  teacherId: string;
  studentsCount: number;
};

export type PublicUser = Omit<User, "password">;
