import { AppError } from "../../shared/errors/AppError.js";
import {
  createUserId,
  toPublicUser,
  users,
} from "../../shared/data/store.js";
import { signToken } from "../../shared/middleware/auth.js";
import type { AuthResponse, LoginInput, RegisterInput } from "./types.js";

export function login(input: LoginInput): AuthResponse {
  const user = users.find(
    (u) => u.email.toLowerCase() === input.email.toLowerCase(),
  );

  if (!user || user.password !== input.password) {
    throw new AppError(401, "Invalid email or password");
  }

  const publicUser = toPublicUser(user);
  const token = signToken({
    sub: publicUser.id,
    email: publicUser.email,
    role: publicUser.role,
    name: publicUser.name,
  });

  return { token, user: publicUser };
}

export function register(input: RegisterInput): AuthResponse {
  const exists = users.some(
    (u) => u.email.toLowerCase() === input.email.toLowerCase(),
  );
  if (exists) {
    throw new AppError(409, "Email already registered");
  }

  const user = {
    id: createUserId(),
    name: input.name,
    email: input.email.toLowerCase(),
    password: input.password,
    role: input.role ?? "student",
  };

  users.push(user);
  const publicUser = toPublicUser(user);
  const token = signToken({
    sub: publicUser.id,
    email: publicUser.email,
    role: publicUser.role,
    name: publicUser.name,
  });

  return { token, user: publicUser };
}

export function me(userId: string) {
  const user = users.find((u) => u.id === userId);
  if (!user) {
    throw new AppError(404, "User not found");
  }
  return toPublicUser(user);
}
