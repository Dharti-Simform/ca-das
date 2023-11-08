import { Route, Routes } from "react-router";
import { routes } from "./routes";

import Playground from "../base-components/Playground";
import Dashboard from "src/pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "src/pages/SignUpPage";
// import Chat from "src/biz-components/chat/Chat";

const AppRoutes = () => (
  <Routes>
    <Route path={routes.playground} element={<Playground />} />
    <Route path={routes.register} element={<SignUpPage />} />
    <Route path={routes.login} element={<LoginPage />} />
    <Route path={routes.dashboard} element={<Dashboard />} />
    {/* <Route path={routes.messages} element={<Chat />} /> */}
    <Route path="*" element={<p>Not found</p>} />
  </Routes>
);

export default AppRoutes;
