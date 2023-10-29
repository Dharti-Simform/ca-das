import React from "react";
import { useTranslation } from "react-i18next";
import SidebarItems from "./SidebarItems";

const Sidebar: React.FC = () => {
  const { t } = useTranslation("Dashboard");

  return (
    <>
      <SidebarItems />
      <div>Teams</div>
    </>
  );
};

export default Sidebar;
