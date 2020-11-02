import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { LoginPage } from "./pages/landing/LoginPage";
import { DefaultHomePageA } from "./pages/ui-a/DefaultHomePageA";
import { DefaultHomePageB } from "./pages/ui-c/DefaultHomePageB";
import { HashRouter as Router, Route } from "react-router-dom";
import { DeclarationPageA } from "./pages/ui-a/DeclarationPageA";
import { DeclarationPageB } from "./pages/ui-b/DeclarationPageB";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <CssBaseline />
        <Route exact path="/" component={LoginPage} />
        <Route path="/default-home-a" component={DefaultHomePageA} />
        <Route path="/default-home-b" component={DefaultHomePageB} />
        <Route path="/declaration-a" component={DeclarationPageA} />
        <Route path="/declaration-b" component={DeclarationPageB} />
      </div>
    </Router>
  );
}

export default App;
