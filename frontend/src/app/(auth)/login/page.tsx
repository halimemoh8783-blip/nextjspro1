import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      mode="login"
      title="Welcome back"
      subtitle="Sign in to open your courses, categories, and dashboard."
      footerHref="/register"
      footerLabel="New here? Create an account"
    >
      <LoginForm />
    </AuthLayout>
  );
}
