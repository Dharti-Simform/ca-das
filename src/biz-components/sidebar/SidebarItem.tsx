import React from "react";

import "./Sidebar.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface IProps {
  name: string;
  Icon: React.ReactElement;
  isActive?: boolean;
  path: string;
}

const SidebarItem: React.FC<IProps> = ({
  name,
  Icon,
  isActive = false,
  path,
}) => (
  <NavLink to={path} className={classNames("sidebar-item")}>
    <>
      {Icon}
      <span>{name}</span>
    </>
  </NavLink>
);

export default SidebarItem;
