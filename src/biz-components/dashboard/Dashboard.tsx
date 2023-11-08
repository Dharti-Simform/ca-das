import React from "react";

import "src/biz-components/dashboard/Dashboard.scss";
import Teams from "./Teams";
import Projects from "./Projects";

const Dashboard: React.FC = () => (
  <div className="dashboard-container">
    <Teams />
    <Projects />
  </div>
);

export default Dashboard;
