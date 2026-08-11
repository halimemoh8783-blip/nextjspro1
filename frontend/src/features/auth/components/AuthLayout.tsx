import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerHref: string;
  footerLabel: string;
  mode?: "login" | "register";
};

export function AuthLayout({
  title,
  subtitle,
  children,
  footerHref,
  footerLabel,
  mode = "login",
}: Props) {
  return (
    <div className="auth-shell">
      <div className="auth-grid" data-mode={mode}>
        <aside className="auth-brand-panel">
          <div className="auth-brand-glow" />
          <div className="auth-brand-pattern" />
          <div className="auth-brand-content">
            <Link href="/" className="auth-logo">
              <span className="auth-logo-mark" aria-hidden>
                L
              </span>
              <span className="auth-logo-text">LearnHub</span>
            </Link>
            <p className="auth-eyebrow">Learning platform</p>
            <h2 className="auth-brand-headline">
              Build skills with
              <span> clarity and focus.</span>
            </h2>
            <p className="auth-brand-copy">
              Courses, categories, and role-based dashboards in one clean
              workspace — built for students, teachers, and admins.
            </p>
            <ul className="auth-points">
              <li>Role-aware dashboards</li>
              <li>Simple course management</li>
              <li>Fast, feature-based architecture</li>
            </ul>
          </div>
        </aside>

        <main className="auth-form-panel">
          <div className="auth-form-card">
            <div className="auth-form-top">
              <Link href="/" className="auth-logo auth-logo-mobile">
                <span className="auth-logo-mark" aria-hidden>
                  L
                </span>
                <span className="auth-logo-text">LearnHub</span>
              </Link>
              <h1 className="auth-title">{title}</h1>
              <p className="auth-subtitle">{subtitle}</p>
            </div>

            {children}

            <p className="auth-footer">
              <Link href={footerHref}>{footerLabel}</Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
