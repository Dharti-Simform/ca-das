import React from "react";

import { Route, Routes } from "react-router";
import { routes } from "./routes";

import Playground from "../base-components/Playground";
import SignUp from "src/biz-components/signup/SignUp";

const AppRoutes = () => (
  <Routes>
    <Route path={routes.playground} element={<Playground />} />
    <Route path={routes.register} element={<SignUp />} />
    <Route path="*" element={<p>Not found</p>} />
  </Routes>
);

export default AppRoutes;
