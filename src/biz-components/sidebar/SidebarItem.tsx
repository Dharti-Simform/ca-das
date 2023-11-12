import React from "react";

import "./Sidebar.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface IProps {
  name: string | React.ReactElement;
  Icon: React.ReactElement;
  path: string;
}

const SidebarItem: React.FC<IProps> = ({ name, Icon, path }) => (
  <NavLink to={path} className={classNames("sidebar-item")}>
    <>
      {Icon}
      <span className="sidebar-item-name">{name}</span>
    </>
  </NavLink>
);

export default SidebarItem;
