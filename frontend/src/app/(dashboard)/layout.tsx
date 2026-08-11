"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { DashboardShell } from "@/features/dashboard/components/DashboardShell";

export default function DashboardGroupLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="center-screen">
        <p className="muted">Checking session…</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <DashboardShell title="Workspace">{children}</DashboardShell>;
}
