import React from "react";

import PrivateLayout from "src/layouts/private-layout/PrivateLayout";

import "src/biz-components/dashboard/Dashboard.scss";
import Teams from "./Teams";
import Projects from "./Projects";

const Dashboard: React.FC = () => (
  <PrivateLayout>
    <div className="dashboard-container">
      <Teams />
      <Projects />
    </div>
  </PrivateLayout>
);

export default Dashboard;
