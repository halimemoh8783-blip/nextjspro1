"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  clearAuthStorage,
  getStoredUser,
  getToken,
  setStoredUser,
  setToken,
} from "@/shared/auth/storage";
import { authApi } from "../services/authApi";
import type { User } from "../types/index";
import { AuthContext } from "../hooks/authContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const existingToken = getToken();
    const storedUser = getStoredUser();

    if (!existingToken) {
      setIsLoading(false);
      return;
    }

    setTokenState(existingToken);
    if (storedUser) setUser(storedUser);

    authApi
      .me(existingToken)
      .then((me) => {
        setUser(me);
        setStoredUser(me);
      })
      .catch(() => {
        clearAuthStorage();
        setUser(null);
        setTokenState(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  function setSession(nextToken: string, nextUser: User) {
    setToken(nextToken);
    setStoredUser(nextUser);
    setTokenState(nextToken);
    setUser(nextUser);
  }

  function logout() {
    clearAuthStorage();
    setTokenState(null);
    setUser(null);
  }

  async function refreshUser() {
    if (!token) return;
    const me = await authApi.me(token);
    setUser(me);
    setStoredUser(me);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: Boolean(token && user),
        setSession,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
