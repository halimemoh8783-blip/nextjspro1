"use client";

import { useCallback, useEffect, useState } from "react";
import { getErrorMessage } from "@/shared/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { categoriesApi } from "@/features/categories/services/categoriesApi";
import type { Category } from "@/features/categories/types";
import { coursesApi } from "../services/coursesApi";
import type { Course, CreateCourseInput } from "../types/index";

export function useCourses() {
  const { token } = useAuth();
  const [items, setItems] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  const load = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError(null);
    try {
      const [courseList, categoryList] = await Promise.all([
        coursesApi.list(token),
        categoriesApi.list(token),
      ]);
      setItems(courseList);
      setCategories(categoryList);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    void load();
  }, [load]);

  async function create(input: CreateCourseInput) {
    if (!token) return;
    setIsCreating(true);
    setError(null);
    try {
      const created = await coursesApi.create(token, input);
      setItems((prev) => [...prev, created]);
    } catch (err) {
      setError(getErrorMessage(err));
      throw err;
    } finally {
      setIsCreating(false);
    }
  }

  return {
    items,
    categories,
    error,
    isLoading,
    isCreating,
    create,
    reload: load,
  };
}
