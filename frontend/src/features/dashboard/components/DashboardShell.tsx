"use client";

import type { ReactNode } from "react";
import { Sidebar, TopNav } from "@/shared/components/layout";

type Props = {
  title: string;
  children: ReactNode;
};

export function DashboardShell({ title, children }: Props) {
  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <TopNav title={title} />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
