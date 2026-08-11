"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { useCategories } from "../hooks/useCategories";

export function CategoriesView() {
  const { user } = useAuth();
  const { items, error, isLoading, isCreating, create } = useCategories();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const canCreate = user?.role === "admin" || user?.role === "teacher";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await create({ name, description });
    setName("");
    setDescription("");
  }

  return (
    <div className="page-stack">
      {error ? <p className="form-error">{error}</p> : null}
      {isLoading ? <p className="muted">Loading categories…</p> : null}
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="list-item">
            <strong>{item.name}</strong>
            <p className="muted">{item.description}</p>
          </li>
        ))}
      </ul>
      {canCreate ? (
        <form className="stack panel" onSubmit={onSubmit}>
          <h2>Add category</h2>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Saving…" : "Create category"}
          </Button>
        </form>
      ) : null}
    </div>
  );
}
