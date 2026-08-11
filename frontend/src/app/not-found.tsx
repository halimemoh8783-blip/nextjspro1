import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center-screen">
      <h1>Page not found</h1>
      <p className="muted">That route does not exist.</p>
      <Link className="btn btn-primary" href="/">
        Go home
      </Link>
    </div>
  );
}
