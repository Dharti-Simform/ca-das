import React from "react";
import { useTranslation } from "react-i18next";
import SidebarItem from "./SidebarItem";

import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/schedule.svg";

import "./Sidebar.scss";

const SidebarItems: React.FC = () => {
  const { t } = useTranslation("Dashboard");

  return (
    <div className="sidebar-wrapper">
      <SidebarItem
        Icon={<ChatIcon />}
        name={t("sidebar.dashboard")}
        isActive={true}
      />
      <SidebarItem
        Icon={<ChatIcon width={24} height={24} />}
        name={t("sidebar.message")}
      />
      <SidebarItem
        Icon={<ChatIcon width={24} height={24} />}
        name={t("sidebar.project")}
      />
      <SidebarItem
        Icon={<ScheduleIcon width={24} height={24} />}
        name={t("sidebar.schedule")}
      />
      <SidebarItem
        Icon={<ChatIcon width={24} height={24} />}
        name={t("sidebar.activity")}
      />
    </div>
  );
};

export default SidebarItems;
