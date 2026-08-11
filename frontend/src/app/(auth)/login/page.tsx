import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in"
      subtitle="Use a demo account or your own credentials."
      footerHref="/register"
      footerLabel="Need an account? Register"
    >
      <LoginForm />
    </AuthLayout>
  );
}
