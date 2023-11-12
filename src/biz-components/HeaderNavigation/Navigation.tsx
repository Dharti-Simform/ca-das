import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import WaveHand from "src/assets/icons/wave-hand.png";
import User from "src/assets/avatars/User1.png";
import { ReactComponent as SearchIcon } from "src/assets/icons/search.svg";
import { ReactComponent as PlusIcon } from "src/assets/icons/plus-icon.svg";
import { ReactComponent as SettingIcon } from "src/assets/icons/settings.svg";
import { ReactComponent as BellIcon } from "src/assets/icons/bell.svg";
import { ReactComponent as ChatIcon } from "src/assets/icons/message.svg";

import "src/biz-components/HeaderNavigation/Navigation.scss";
import Input from "../../base-components/Input/Input";
import Button from "../../base-components/Button/Button";
import { routes } from "src/routes/routes";

const Navigation: React.FC = () => {
  const { t } = useTranslation("Sidebar");

  const [search, setSearch] = useState<string>("");

  const pathname = window.location.pathname;

  return (
    <div className="navigation-wrapper">
      <div className="welcome-user">
        {pathname === routes.dashboard ? (
          <>
            <img src={WaveHand} alt="wave-hand" width={30} />
            <h2>{t("user", { name: "John" })}</h2>
          </>
        ) : (
          <>
            <ChatIcon width={30} height={30} />
            <h2>{t("message")}</h2>
          </>
        )}
      </div>
      <Input
        id="search"
        value={search}
        onChange={(e) => setSearch(e?.target?.value || "")}
        placeholder={t("search")}
        containerClassName="input-icon-wrapper search-container"
        inputClassName="search-box"
      >
        <SearchIcon width={24} height={24} className="eye-icon icon" />
      </Input>
      <div className="actions">
        <Button id="addProject" buttonClassName="add-project">
          <PlusIcon height={24} width={24} />
          <span>{t("startProject")}</span>
        </Button>
        <BellIcon />
        <SettingIcon />
        <img src={User} alt="John" />
      </div>
    </div>
  );
};

export default Navigation;
