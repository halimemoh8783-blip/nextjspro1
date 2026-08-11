import type { Metadata } from "next";
import { AuthProvider } from "@/features/auth/components/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnHub",
  description: "Feature-based learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
