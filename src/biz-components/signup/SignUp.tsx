import React, { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";

import PublicLayout from "src/layouts/public-layout/PublicLayout";
import Input from "src/base-components/Input/Input";
import { ReactComponent as EyeIcon } from "src/assets/icons/eye.svg";

import "../signup/SignUp.scss";
import Checkbox from "src/base-components/Checkbox/Checkbox";
import Button from "src/base-components/Button/Button";
import GoogleLogin from "../google-login/GoogleLogin";
import { Link } from "react-router-dom";
import { routes } from "src/routes/routes";

/* 
  TO-DO:
  - Should we apply fixed width to container or use padding?
*/
const SignUp: React.FC = () => {
  const { t } = useTranslation("SignUp");

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pwdType, setPwdType] = useState<"text" | "password">("password");
  const [termsChecked, setTermsChecked] = useState<boolean>(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value || "";
      switch (event?.target?.id) {
        case "email":
          setEmail(value);
          break;
        case "name":
          setName(value);
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
        <p>{t("subtitle")}</p>
        <form className="signup-form">
          <Input
            id="email"
            value={email}
            onChange={handleChange}
            placeholder={t("form.email.placeholder")}
          />
          <Input
            id="name"
            value={name}
            onChange={handleChange}
            placeholder={t("form.name.placeholder")}
          />
          <Input
            id="password"
            type={pwdType}
            value={password}
            onChange={handleChange}
            placeholder={t("form.password.placeholder")}
          >
            <EyeIcon
              width={24}
              height={24}
              className="eye-icon"
              onClick={() =>
                setPwdType(pwdType === "password" ? "text" : "password")
              }
            />
          </Input>
          <Checkbox
            id="terms"
            isChecked={termsChecked}
            label={
              <div>
                {t("terms")}&nbsp;
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("termsLink")}
                </a>
              </div>
            }
            onChange={(event) => setTermsChecked(event?.target?.checked)}
          />
          <div className="vertical-flex">
            <div className="vertical-flex">
              <Button
                id="register-btn"
                onClick={() => console.log("*** clicked")}
              >
                {t("register")}
              </Button>
              <div className="alternate-text">{t("or")}</div>
              <GoogleLogin />
            </div>
            <div className="login-link">
              {t("existingAccount.label")}{" "}
              <Link to={routes.login}>{t("existingAccount.link")}</Link>
            </div>
          </div>
        </form>
      </div>
    </PublicLayout>
  );
};

export default SignUp;
