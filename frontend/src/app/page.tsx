import Link from "next/link";
import { Footer, Header } from "@/shared/components/layout";
import { Button } from "@/shared/components/ui/Button";

export default function HomePage() {
  return (
    <div className="landing">
      <Header />
      <main className="landing-main">
        <h1>Learn without the clutter.</h1>
        <p>
          A feature-sliced learning platform built with Next.js on the front and
          Express on the back — clear routes, clear domains, clear ownership.
        </p>
        <div className="cta-row">
          <Link href="/login">
            <Button type="button">Sign in</Button>
          </Link>
          <Link href="/register">
            <Button type="button" variant="secondary">
              Create account
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
