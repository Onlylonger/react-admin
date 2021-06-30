import React from "react";
import Footer from "../footer";
import Header from "../header";
import styles from "./index.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Header className={styles.fix} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
