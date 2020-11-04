import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { DeclarationPageA } from "../pages/DeclarationPageA";
import { DefaultHomePageA } from "../pages/DefaultHomePageA";

export const RouteA = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DefaultHomePageA} />
      <Route path={`${path}/declaration`} component={DeclarationPageA} />
    </Switch>
  );
};
