import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { CombinedHomePageB } from "../pages/CombinedHomePageB";

export const RouteF = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={CombinedHomePageB} />
    </Switch>
  );
};
