import React from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";
import DocsSide from "./side";
import sideList from "@/pages/docs/md";

import styles from "./index.css";

const Layout = (props) => {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.containter}>
          <DocsSide className={styles.side} />
          <div className={styles.content}>
            <Switch>
              {sideList.map(
                (v) =>
                  v.path && (
                    <Route
                      path={`/components/${v.path}`}
                      exact
                      component={v.component}
                    />
                  )
              )}
            </Switch>
          </div>
        </div>
        <Footer className={styles.footer} />
      </main>
    </>
  );
};

export default Layout;
