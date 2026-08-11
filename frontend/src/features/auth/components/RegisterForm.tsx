"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import type { Role } from "../types";
import { useRegister } from "../hooks/useRegister";

export function RegisterForm() {
  const { register, error, isSubmitting } = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("student");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await register({ name, email, password, role });
  }

  return (
    <form className="auth-form stack" onSubmit={onSubmit}>
      <Input
        label="Full name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <Input
        label="Email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        minLength={6}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="At least 6 characters"
      />
      <label className="field">
        <span className="field-label">I am joining as</span>
        <select
          className="field-input"
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <Button type="submit" fullWidth disabled={isSubmitting} className="auth-submit">
        {isSubmitting ? "Creating account…" : "Create free account"}
      </Button>
    </form>
  );
}
