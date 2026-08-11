export type Role = "admin" | "teacher" | "student";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  role?: Role;
};

export type AuthResponse = {
  token: string;
  user: User;
};
