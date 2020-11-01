import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container
        maxWidth="xs"
        style={{ backgroundColor: "#cfe8fc", height: "640px" }}
        disableGutters
        component="div"
      >
        <p>Placeholder for Univus-UI</p>
      </Container>
    </div>
  );
}

export default App;
