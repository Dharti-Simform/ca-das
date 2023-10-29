import React from "react";

import "./Sidebar.scss";
import classNames from "classnames";

interface IProps {
  name: string;
  Icon: React.ReactElement;
  isActive?: boolean;
}

const SidebarItem: React.FC<IProps> = ({ name, Icon, isActive = false }) => (
  <div
    className={classNames("sidebar-item", {
      active: isActive,
    })}
  >
    {Icon}
    <span>{name}</span>
  </div>
);

export default SidebarItem;
