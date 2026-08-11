"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Button } from "@/shared/components/ui/Button";

type Props = {
  title: string;
};

export function TopNav({ title }: Props) {
  const { logout, user } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <div className="topnav">
      <div>
        <h1>{title}</h1>
        {user ? <p className="topnav-meta">Signed in as {user.email}</p> : null}
      </div>
      <Button variant="secondary" type="button" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}
