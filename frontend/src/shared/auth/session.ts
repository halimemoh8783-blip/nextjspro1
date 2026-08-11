import { cookies } from "next/headers";

export async function getServerToken(): Promise<string | null> {
  const jar = await cookies();
  return jar.get("auth_token")?.value ?? null;
}

export async function hasServerSession(): Promise<boolean> {
  return Boolean(await getServerToken());
}
