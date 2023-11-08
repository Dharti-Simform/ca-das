import React from "react";
import Dashboard from "src/biz-components/dashboard/Dashboard";

import PrivateLayout from "src/layouts/private-layout/PrivateLayout";

const DashboardPage: React.FC = () => (
  <PrivateLayout>
    <Dashboard />
  </PrivateLayout>
);

export default DashboardPage;
