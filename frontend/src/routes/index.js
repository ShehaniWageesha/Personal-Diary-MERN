/** @format */
import React from "react";
import { Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreateDiary from "../pages/CreateDiary";
import EditDiaries from "../pages/EditDiary";
import DiariesList from "../pages/DiaryList";
import { RoutePaths } from "./route-paths";

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/" exact component={Dashboard} />
      <Route path={paths.register} component={Register} />
      <Route path={paths.login} component={Login} />
      <Route path="/list" exact component={DiariesList} />
      <Route path={`${paths.edit}:id`} component={EditDiaries} />
      <Route path={paths.create} component={CreateDiary} />
    </>
  );
};

export default Routes;
