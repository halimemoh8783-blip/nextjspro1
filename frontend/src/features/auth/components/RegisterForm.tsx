"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import type { Role } from "../types/index";
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
    <form className="stack" onSubmit={onSubmit}>
      <Input
        label="Name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        minLength={6}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="field">
        <span className="field-label">Role</span>
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
      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? "Creating…" : "Create account"}
      </Button>
    </form>
  );
}
