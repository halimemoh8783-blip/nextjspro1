const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student";
};

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
  document.cookie = `auth_token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; samesite=lax`;
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
  document.cookie = "auth_token=; path=/; max-age=0; samesite=lax";
}

export function getStoredUser(): StoredUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
}

export function setStoredUser(user: StoredUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  localStorage.removeItem(USER_KEY);
}

export function clearAuthStorage() {
  clearToken();
  clearStoredUser();
}
