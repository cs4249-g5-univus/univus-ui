import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { HomePageA } from "./pages/ui-a/HomePageA";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <HomePageA />
    </div>
  );
}

export default App;
