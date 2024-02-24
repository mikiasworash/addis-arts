import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen py-32 flex justify-center">
      <SignUp signInUrl="/login" />
    </div>
  );
}
