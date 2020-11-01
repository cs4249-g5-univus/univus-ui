import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { HomePageA } from "./pages/ui-a/HomePageA";
import { HashRouter as Router, Route } from "react-router-dom";
import { DeclarationPageA } from "./pages/ui-a/DeclarationPageA";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <CssBaseline />
        <Route exact path="/" component={HomePageA} />
        <Route path="/declaration-a" component={DeclarationPageA} />
      </div>
    </Router>
  );
}

export default App;
