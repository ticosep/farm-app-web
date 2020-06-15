import { Grommet } from "grommet";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

import trimoTheme from "./config/theme";
import AppLayout from "./layout";
import Routes from "./routes";

const basePath = process.env.BASE_PATH || "/";

const App = () => {
  return (
    <Router basename={basePath}>
      <Grommet theme={trimoTheme}>
        <AppLayout>
          <Routes />
        </AppLayout>
      </Grommet>
    </Router>
  );
};

export default App;
