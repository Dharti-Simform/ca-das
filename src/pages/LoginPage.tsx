import React from "react";
import Login from "src/biz-components/login/Login";
import PublicLayout from "src/layouts/public-layout/PublicLayout";

const LoginPage: React.FC = () => (
  <PublicLayout>
    <Login />
  </PublicLayout>
);

export default LoginPage;
