"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const { login, error, isSubmitting } = useLogin();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await login({ email, password });
  }

  return (
    <form className="stack" onSubmit={onSubmit}>
      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error ? <p className="form-error">{error}</p> : null}
      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? "Signing in…" : "Sign in"}
      </Button>
      <p className="hint">
        Demo: admin@example.com / teacher@example.com / student@example.com —
        password
      </p>
    </form>
  );
}
