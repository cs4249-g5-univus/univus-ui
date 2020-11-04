import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { LoginPage } from "./pages/LoginPage";
import { DefaultHomePageA } from "./pages/ui-a/DefaultHomePageA";
import { DefaultHomePageB } from "./pages/ui-c/DefaultHomePageB";
import { HashRouter as Router, Route } from "react-router-dom";
import { DeclarationPageA } from "./pages/ui-a/DeclarationPageA";
import { DeclarationPageB } from "./pages/ui-b/DeclarationPageB";
import { UserStateProvider } from "./contexts/UserState";
import { CombinedHomePageA } from "./pages/ui-e/CombinedHomePageA";
import { CombinedHomePageB } from "./pages/ui-f/CombinedHomePageB";
import { TrialCountStateProvider } from "./contexts/TrialCountState";
import { PreTrialPage } from "./pages/PreTrialPage";

function App() {
  return (
    <UserStateProvider>
      <TrialCountStateProvider>
        <Router basename="/">
          <div className="App">
            <CssBaseline />
            <Route exact path="/" component={LoginPage} />
            <Route path="/pretrial" component={PreTrialPage} />
            <Route path="/combined-home-a" component={CombinedHomePageA} />
            <Route path="/combined-home-b" component={CombinedHomePageB} />
            <Route path="/default-home-a" component={DefaultHomePageA} />
            <Route path="/default-home-b" component={DefaultHomePageB} />
            <Route path="/declaration-a" component={DeclarationPageA} />
            <Route path="/declaration-b" component={DeclarationPageB} />
          </div>
        </Router>
      </TrialCountStateProvider>
    </UserStateProvider>
  );
}

export default App;
