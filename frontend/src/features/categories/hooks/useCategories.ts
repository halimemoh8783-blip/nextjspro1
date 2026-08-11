"use client";

import { useCallback, useEffect, useState } from "react";
import { getErrorMessage } from "@/shared/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { categoriesApi } from "../services/categoriesApi";
import type { Category, CreateCategoryInput } from "../types/index";

export function useCategories() {
  const { token } = useAuth();
  const [items, setItems] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  const load = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError(null);
    try {
      setItems(await categoriesApi.list(token));
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  async function create(input: CreateCategoryInput) {
    if (!token) return;
    setIsCreating(true);
    setError(null);
    try {
      const created = await categoriesApi.create(token, input);
      setItems((prev) => [...prev, created]);
    } catch (err) {
      setError(getErrorMessage(err));
      throw err;
    } finally {
      setIsCreating(false);
    }
  }

  return { items, error, isLoading, isCreating, create, reload: load };
}
