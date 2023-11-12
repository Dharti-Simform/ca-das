import { Route, Routes } from "react-router";
import { routes } from "./routes";

import Playground from "../base-components/Playground";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "src/pages/SignUpPage";
import ChatPage from "src/pages/ChatPage";
import DashboardPage from "src/pages/DashboardPage";

const AppRoutes = () => (
  <Routes>
    <Route path={routes.playground} element={<Playground />} />
    <Route path={routes.register} element={<SignUpPage />} />
    <Route path={routes.login} element={<LoginPage />} />
    <Route path={routes.dashboard} element={<DashboardPage />} />
    <Route path={routes.messages} element={<ChatPage />} />
    <Route path="*" element={<p>Not found</p>} />
  </Routes>
);

export default AppRoutes;
