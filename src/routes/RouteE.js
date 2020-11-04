import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { CombinedHomePageA } from "../pages/CombinedHomePageA";

export const RouteE = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={CombinedHomePageA} />
    </Switch>
  );
};
