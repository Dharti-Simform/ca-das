import React from "react";
import { useTranslation } from "react-i18next";
import SidebarItem from "./SidebarItem";

import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/schedule.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/window.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as TickmarkIcon } from "../../assets/icons/tickmark.svg";

import "./Sidebar.scss";
import { routes } from "src/routes/routes";

const SidebarItems: React.FC = () => {
  const { t } = useTranslation("Sidebar");

  return (
    <div className="sidebar-wrapper">
      <SidebarItem
        Icon={<DashboardIcon />}
        name={t("sidebar.dashboard")}
        isActive={true}
        path={routes.dashboard}
      />
      <SidebarItem
        Icon={<ChatIcon width={24} height={24} />}
        name={t("sidebar.message")}
        path={routes.messages}
      />
      <SidebarItem
        Icon={<TickmarkIcon width={24} height={24} />}
        name={t("sidebar.project")}
        path={routes.project}
      />
      <SidebarItem
        Icon={<ScheduleIcon width={24} height={24} />}
        name={t("sidebar.schedule")}
        path={routes.schedule}
      />
      <SidebarItem
        Icon={<ClockIcon width={24} height={24} />}
        name={t("sidebar.activity")}
        path={routes.activity}
      />
    </div>
  );
};

export default SidebarItems;
