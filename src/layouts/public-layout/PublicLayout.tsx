import React from "react";

import { ReactComponent as Logo } from "../../assets/logos/CaDas.svg";

import "../public-layout/PublicLayout.scss";

interface IProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<IProps> = ({ children }) => (
  <div className="public-layout-container">
    <div className="public-logo">
      <Logo />
    </div>
    {children}
  </div>
);

export default PublicLayout;
