"use client";

import { useCallback, useEffect, useState } from "react";
import { getErrorMessage } from "@/shared/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { dashboardApi } from "../services/dashboardApi";
import type { DashboardStats } from "../types/index";

export function useDashboard() {
  const { token } = useAuth();
  const [data, setData] = useState<DashboardStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError(null);
    try {
      setData(await dashboardApi.get(token));
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  return { data, error, isLoading, reload: load };
}
