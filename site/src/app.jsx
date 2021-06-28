import React from "react";
import routes from "./routes";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { WButton } from "@shilong/wui";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, k) => (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={k}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
