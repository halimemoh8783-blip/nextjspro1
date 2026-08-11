"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { cx, formatRole } from "@/shared/utils";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/categories", label: "Categories" },
  { href: "/users", label: "Users", adminOnly: true },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Link href="/dashboard">LearnHub</Link>
        {user ? (
          <p className="sidebar-user">
            {user.name}
            <span>{formatRole(user.role)}</span>
          </p>
        ) : null}
      </div>
      <nav className="sidebar-nav">
        {links
          .filter((l) => !l.adminOnly || user?.role === "admin")
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cx(
                "sidebar-link",
                pathname === link.href && "sidebar-link-active",
              )}
            >
              {link.label}
            </Link>
          ))}
      </nav>
    </aside>
  );
}
