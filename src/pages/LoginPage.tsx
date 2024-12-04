import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="grid place-content-center h-screen">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
