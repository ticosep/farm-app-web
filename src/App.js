import React from "react";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";

const basePath = process.env.BASE_PATH || "/";

const App = () => {
  return (
    <Router basename={basePath}>
      <Routes />
    </Router>
  );
};

export default App;
