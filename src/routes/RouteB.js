import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { DeclarationPageB } from "../pages/DeclarationPageB";
import { DefaultHomePageA } from "../pages/DefaultHomePageA";

export const RouteB = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DefaultHomePageA} />
      <Route path={`${path}/declaration`} component={DeclarationPageB} />
    </Switch>
  );
};
