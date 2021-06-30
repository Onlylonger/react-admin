import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.css";
import LogoAsset from "../../images/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <Link to="/">
          <img src={LogoAsset} alt="" height="80" />
        </Link>
      </section>
      <section className={styles.right}>
        <Link to="/components">
          <div className={styles.hoverContainer}>组件</div>
        </Link>
        <Link to="/assets">
          <div className={styles.hoverContainer}>资源</div>
        </Link>
      </section>
    </header>
  );
};

export default Header;
