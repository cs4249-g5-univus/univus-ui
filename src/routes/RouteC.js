import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { DeclarationPageA } from "../pages/DeclarationPageA";
import { DefaultHomePageB } from "../pages/DefaultHomePageB";

export const RouteC = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DefaultHomePageB} />
      <Route path={`${path}/declaration`} component={DeclarationPageA} />
    </Switch>
  );
};
