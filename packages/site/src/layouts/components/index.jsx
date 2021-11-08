import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";
import DocsSide from "@/layouts/components/side";

import styles from "./index.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Header className={styles.fix} />
      <DocsSide />
      <Switch>
        <Route path="/components/changelog" exact>
          <h3>Changelog.</h3>
        </Route>
        <Route path="/components/install" exact>
          <h1>install.</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Layout;
