import { apiClient } from "@/shared/api";
import type { AuthResponse, LoginInput, RegisterInput, User } from "../types/index";

export const authApi = {
  login(input: LoginInput) {
    return apiClient<AuthResponse>("/auth/login", {
      method: "POST",
      body: input,
    });
  },
  register(input: RegisterInput) {
    return apiClient<AuthResponse>("/auth/register", {
      method: "POST",
      body: input,
    });
  },
  me(token: string) {
    return apiClient<User>("/auth/me", { token });
  },
};
