"use client";

import { useCallback, useEffect, useState } from "react";
import { getErrorMessage } from "@/shared/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { usersApi } from "../services/usersApi";
import type { User } from "../types/index";

export function useUsers() {
  const { token } = useAuth();
  const [items, setItems] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError(null);
    try {
      setItems(await usersApi.list(token));
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  return { items, error, isLoading, reload: load };
}
