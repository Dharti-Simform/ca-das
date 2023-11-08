import React from "react";
import SignUp from "src/biz-components/signup/SignUp";
import PublicLayout from "src/layouts/public-layout/PublicLayout";

const SignUpPage: React.FC = () => (
  <PublicLayout>
    <SignUp />
  </PublicLayout>
);

export default SignUpPage;
