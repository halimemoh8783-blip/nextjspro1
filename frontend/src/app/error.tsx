"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="center-screen">
      <h1>Something went wrong</h1>
      <p className="muted">{error.message}</p>
      <button className="btn btn-primary" type="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
