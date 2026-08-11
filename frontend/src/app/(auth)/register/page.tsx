import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      mode="register"
      title="Join LearnHub"
      subtitle="Create an account and start in under a minute."
      footerHref="/login"
      footerLabel="Already have an account? Sign in"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
