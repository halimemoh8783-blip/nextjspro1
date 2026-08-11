"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { useLogin } from "../hooks/useLogin";

const demos = [
  { email: "admin@example.com", role: "Admin" },
  { email: "teacher@example.com", role: "Teacher" },
  { email: "student@example.com", role: "Student" },
] as const;

export function LoginForm() {
  const { login, error, isSubmitting } = useLogin();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await login({ email, password });
  }

  function fillDemo(nextEmail: string) {
    setEmail(nextEmail);
    setPassword("password");
  }

  return (
    <form className="auth-form stack" onSubmit={onSubmit}>
      <div className="auth-demo">
        <p className="auth-demo-label">Quick demo access</p>
        <div className="auth-demo-chips">
          {demos.map((demo) => (
            <button
              key={demo.email}
              type="button"
              className="auth-chip"
              onClick={() => fillDemo(demo.email)}
            >
              {demo.role}
            </button>
          ))}
        </div>
        <p className="auth-demo-hint">Password for all demos: password</p>
      </div>

      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />
      {error ? <p className="form-error">{error}</p> : null}
      <Button type="submit" fullWidth disabled={isSubmitting} className="auth-submit">
        {isSubmitting ? "Signing in…" : "Sign in to LearnHub"}
      </Button>
    </form>
  );
}
