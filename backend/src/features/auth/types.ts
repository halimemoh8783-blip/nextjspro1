import { z } from "zod";
import type { Role } from "../../shared/types/index.js";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "teacher", "student"]).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: Role;
  };
};
