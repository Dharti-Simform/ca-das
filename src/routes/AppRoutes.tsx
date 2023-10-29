import { Route, Routes } from "react-router";
import { routes } from "./routes";

import Playground from "../base-components/Playground";
import SignUp from "src/biz-components/signup/SignUp";
import Login from "src/biz-components/login/Login";
import Dashboard from "src/biz-components/dashboard/Dashboard";

const AppRoutes = () => (
  <Routes>
    <Route path={routes.playground} element={<Playground />} />
    <Route path={routes.register} element={<SignUp />} />
    <Route path={routes.login} element={<Login />} />
    <Route path={routes.dashboard} element={<Dashboard />} />
    <Route path="*" element={<p>Not found</p>} />
  </Routes>
);

export default AppRoutes;
