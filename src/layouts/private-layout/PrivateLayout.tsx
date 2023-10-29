import React from "react";

import { ReactComponent as Logo } from "../../assets/logos/CaDas.svg";

import "../private-layout/PrivateLayout.scss";
import { Link } from "react-router-dom";
import { routes } from "src/routes/routes";
import Navigation from "src/base-components/HeaderNavigation/Navigation";

interface IProps {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<IProps> = ({ children }) => (
  <div className="private-layout-container">
    <div id="left" className="column left-column">
      <div className="top-left">
        <Link to={routes.dashboard}>
          <Logo />
        </Link>
      </div>
      <div className="bottom left-bottom">Sidebar</div>
    </div>
    <div id="right" className="column right-column">
      <div className="top-right">
        <Navigation />
      </div>
      <div className="bottom right-bottom">Content</div>
    </div>
  </div>
);

export default PrivateLayout;
