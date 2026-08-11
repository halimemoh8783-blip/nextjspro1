import Link from "next/link";

export function Header() {
  return (
    <header className="app-header">
      <Link href="/" className="brand">
        LearnHub
      </Link>
      <p className="brand-tag">Feature-based learning platform</p>
    </header>
  );
}
