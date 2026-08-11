"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { useCourses } from "../hooks/useCourses";

export function CoursesView() {
  const { user } = useAuth();
  const { items, categories, error, isLoading, isCreating, create } =
    useCourses();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const canCreate = user?.role === "admin" || user?.role === "teacher";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    await create({ title, description, categoryId });
    setTitle("");
    setDescription("");
  }

  return (
    <div className="page-stack">
      {error ? <p className="form-error">{error}</p> : null}
      {isLoading ? <p className="muted">Loading courses…</p> : null}
      <ul className="list">
        {items.map((course) => {
          const category = categories.find((c) => c.id === course.categoryId);
          return (
            <li key={course.id} className="list-item">
              <strong>{course.title}</strong>
              <p className="muted">{course.description}</p>
              <p className="meta">
                {category?.name ?? "Uncategorized"} · {course.studentsCount}{" "}
                students
              </p>
            </li>
          );
        })}
      </ul>
      {canCreate ? (
        <form className="stack panel" onSubmit={onSubmit}>
          <h2>Add course</h2>
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label className="field">
            <span className="field-label">Category</span>
            <select
              className="field-input"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <Button type="submit" disabled={isCreating || !categoryId}>
            {isCreating ? "Saving…" : "Create course"}
          </Button>
        </form>
      ) : null}
    </div>
  );
}
