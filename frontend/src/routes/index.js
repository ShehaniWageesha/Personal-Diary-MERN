/** @format */
import React from "react";
import { Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { RoutePaths } from "./route-paths";

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={Dashboard} />
      <Route path={paths.create} component={Register} />
      <Route path={paths.login} component={Login} />
    </>
  );
};

export default Routes;
