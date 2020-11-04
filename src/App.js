import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { LoginPage } from "./pages/LoginPage";
import { DefaultHomePageA } from "./pages/DefaultHomePageA";
import { DefaultHomePageB } from "./pages/DefaultHomePageB";
import { HashRouter as Router, Route } from "react-router-dom";
import { DeclarationPageA } from "./pages/DeclarationPageA";
import { DeclarationPageB } from "./pages/DeclarationPageB";
import { UserStateProvider } from "./contexts/UserState";
import { CombinedHomePageA } from "./pages/CombinedHomePageA";
import { CombinedHomePageB } from "./pages/CombinedHomePageB";
import { TrialCountStateProvider } from "./contexts/TrialCountState";
import { PreTrialPage } from "./pages/PreTrialPage";
import { PostTrialPage } from "./pages/PostTrialPage";

function App() {
  return (
    <UserStateProvider>
      <TrialCountStateProvider>
        <Router basename="/">
          <div className="App">
            <CssBaseline />
            <Route exact path="/" component={LoginPage} />
            <Route path="/pre-trial" component={PreTrialPage} />
            <Route path="/post-trial" component={PostTrialPage} />
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
