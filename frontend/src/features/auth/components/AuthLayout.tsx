import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerHref: string;
  footerLabel: string;
};

export function AuthLayout({
  title,
  subtitle,
  children,
  footerHref,
  footerLabel,
}: Props) {
  return (
    <div className="auth-shell">
      <div className="auth-panel">
        <Link href="/" className="brand auth-brand">
          LearnHub
        </Link>
        <h1>{title}</h1>
        <p className="muted">{subtitle}</p>
        {children}
        <p className="auth-footer">
          <Link href={footerHref}>{footerLabel}</Link>
        </p>
      </div>
    </div>
  );
}
