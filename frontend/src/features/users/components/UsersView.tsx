"use client";

import { formatRole } from "@/shared/utils";
import { useUsers } from "../hooks/useUsers";

export function UsersView() {
  const { items, error, isLoading } = useUsers();

  return (
    <div className="page-stack">
      {error ? <p className="form-error">{error}</p> : null}
      {isLoading ? <p className="muted">Loading users…</p> : null}
      <ul className="list">
        {items.map((user) => (
          <li key={user.id} className="list-item">
            <strong>{user.name}</strong>
            <p className="muted">{user.email}</p>
            <p className="meta">{formatRole(user.role)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
