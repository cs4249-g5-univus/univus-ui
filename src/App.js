import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { LoginPage } from "./pages/LoginPage";
import { HashRouter as Router, Route } from "react-router-dom";
import { UserStateProvider } from "./contexts/UserState";
import { TrialCountStateProvider } from "./contexts/TrialCountState";
import { PreTrialPage } from "./pages/PreTrialPage";
import { PostTrialPage } from "./pages/PostTrialPage";
import { RouteA } from "./routes/RouteA";
import { RouteB } from "./routes/RouteB";
import { RouteC } from "./routes/RouteC";
import { RouteD } from "./routes/RouteD";
import { RouteE } from "./routes/RouteE";
import { RouteF } from "./routes/RouteF";

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
            <Route path="/interface-a" component={RouteA} />
            <Route path="/interface-b" component={RouteB} />
            <Route path="/interface-c" component={RouteC} />
            <Route path="/interface-d" component={RouteD} />
            <Route path="/interface-e" component={RouteE} />
            <Route path="/interface-f" component={RouteF} />
          </div>
        </Router>
      </TrialCountStateProvider>
    </UserStateProvider>
  );
}

export default App;
