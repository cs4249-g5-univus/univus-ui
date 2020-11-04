import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { DeclarationPageB } from "../pages/DeclarationPageB";
import { DefaultHomePageB } from "../pages/DefaultHomePageB";

export const RouteD = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DefaultHomePageB} />
      <Route path={`${path}/declaration`} component={DeclarationPageB} />
    </Switch>
  );
};
