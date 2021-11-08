import React from "react";
import Index from "./pages/index";
import Docs from "./pages/docs";
import Assets from "./pages/assets";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/components" component={Docs} />
        <Route path="/assets" component={Assets} />
      </Switch>
    </Router>
  );
};

export default App;
