import React from "react";
import { Switch, Route } from "react-router-dom";
// import { WButton } from "@shilong/wui";
import Layout from "../../components/layout";
import DocsSide from "./components/side";
import styles from "./index.css";

const Assets = () => {
  return (
    <Layout>
      <DocsSide className={styles.fix} />
      <Switch>
        <Route path="/components/changelog">
          <h3>Changelog.</h3>
        </Route>
        <Route path="/components/install">
          <h3>install.</h3>
        </Route>
      </Switch>
    </Layout>
  );
};

export default Assets;
