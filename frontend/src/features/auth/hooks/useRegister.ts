"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/shared/api";
import { authApi } from "../services/authApi";
import type { RegisterInput } from "../types/index";
import { useAuth } from "./useAuth";

export function useRegister() {
  const { setSession } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function register(input: RegisterInput) {
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await authApi.register(input);
      setSession(result.token, result.user);
      router.replace("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err, "Registration failed"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return { register, error, isSubmitting };
}
