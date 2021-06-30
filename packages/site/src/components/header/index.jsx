import React from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./index.css";
import LogoAsset from "../../images/logo.png";
import topNavList from "./config";

const Header = (props) => {
  const { className } = props;
  return (
    <header className={classNames(styles.header, className)}>
      <section className={styles.left}>
        <Link to="/">
          <img src={LogoAsset} alt="" height="80" />
        </Link>
      </section>
      <section className={styles.right}>
        {topNavList.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            activeClassName={styles.selectedRoute}
          >
            <div className={styles.hoverContainer}>{item.label}</div>
          </NavLink>
        ))}
      </section>
    </header>
  );
};

export default Header;
