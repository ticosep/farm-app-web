import React from "react";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import AppLayout from "./layout";

const basePath = process.env.BASE_PATH || "/";

const App = () => {
  return (
    <Router basename={basePath}>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
};

export default App;
