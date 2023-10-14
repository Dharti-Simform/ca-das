import React from "react";
import PublicLayout from "src/layouts/public-layout/PublicLayout";

import "../signup/SignUp.scss";
import { useTranslation } from "react-i18next";

const SignUp: React.FC = () => {
  const { t } = useTranslation("SignUp");

  return (
    <PublicLayout>
      <div className="form-container">
        <h4>{t("title")}</h4>
        <p>{t("subtitle")}</p>
      </div>
    </PublicLayout>
  );
};

export default SignUp;
