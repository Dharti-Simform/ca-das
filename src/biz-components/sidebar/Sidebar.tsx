import React from "react";
import SidebarItems from "./SidebarItems";
import Teams from "./Teams";

const Sidebar: React.FC = () => {
  return (
    <>
      <SidebarItems />
      <Teams />
    </>
  );
};

export default Sidebar;
