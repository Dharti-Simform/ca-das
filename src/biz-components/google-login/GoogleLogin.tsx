import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Google } from "src/assets/icons/google.svg";

import "../google-login/GoogleLogin.scss";
import { Link } from "react-router-dom";
import { routes } from "src/routes/routes";

/* 
    TO-DO: 
    - Does vertical-middle work only with block level elements?
    - Width not changing
*/
const GoogleLogin: React.FC = () => {
  const { t } = useTranslation("SignUp");

  return (
    <Link className="google-login" to={routes.login}>
      <Google height={16} width={16} />
      <span>{t("googleLogin")}</span>
    </Link>
  );
};

export default GoogleLogin;
