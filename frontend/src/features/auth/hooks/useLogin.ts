"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/shared/api";
import { authApi } from "../services/authApi";
import type { LoginInput } from "../types/index";
import { useAuth } from "./useAuth";

export function useLogin() {
  const { setSession } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function login(input: LoginInput) {
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await authApi.login(input);
      setSession(result.token, result.user);
      router.replace("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err, "Login failed"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return { login, error, isSubmitting };
}
