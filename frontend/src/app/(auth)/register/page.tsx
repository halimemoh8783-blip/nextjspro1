import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create account"
      subtitle="Join as a student, teacher, or admin."
      footerHref="/login"
      footerLabel="Already registered? Sign in"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
