import React, { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "src/routes/routes";

import PublicLayout from "src/layouts/public-layout/PublicLayout";
import Input from "src/base-components/Input/Input";
import Button from "src/base-components/Button/Button";

import GoogleLogin from "../google-login/GoogleLogin";

import { ReactComponent as EyeIcon } from "src/assets/icons/eye.svg";

import "../signup/SignUp.scss";

/* 
  TO-DO:
  - Should we apply fixed width to container or use padding?
*/
const Login: React.FC = () => {
  const { t } = useTranslation("SignIn");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pwdType, setPwdType] = useState<"text" | "password">("password");

  const navigate = useNavigate();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value || "";
      switch (event?.target?.id) {
        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword(value);
          break;
        default:
          break;
      }
    },
    []
  );

  return (
    <PublicLayout>
      <div className="form-container signup-form-wrapper">
        <h2>{t("title")}</h2>
        <p className="grey-font">{t("subtitle")}</p>
        <form className="signup-form">
          <Input
            id="email"
            value={email}
            onChange={handleChange}
            placeholder={t("form.email.placeholder")}
          />
          <Input
            id="password"
            type={pwdType}
            value={password}
            onChange={handleChange}
            placeholder={t("form.password.placeholder")}
            containerClassName="input-icon-wrapper"
          >
            <EyeIcon
              width={24}
              height={24}
              className="icon"
              onClick={() =>
                setPwdType(pwdType === "password" ? "text" : "password")
              }
            />
          </Input>
          <div className="vertical-flex">
            <div className="vertical-flex">
              <Button id="login-btn" onClick={() => navigate(routes.dashboard)}>
                {t("login")}
              </Button>
              <div className="alternate-text">{t("or")}</div>
              <GoogleLogin />
            </div>
            <div className="login-link">
              {t("newAccount.label")}{" "}
              <Link to={routes.register}>{t("newAccount.link")}</Link>
            </div>
          </div>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Login;
