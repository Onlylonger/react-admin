import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import sideList from "@/pages/docs/md";
import styles from "./index.css";

const routeRecurison = (routesList) => {
  for (let i = 0; i < routesList.length; i++) {
    if (route.children && route.children.length) {
      return routeRecurison(route.children);
    } else {
      return <NavLink to={`/components/${route.path}`}>{route.name}</NavLink>;
    }
  }
  const sideNavList = routesList.map((route) => {});
  return sideNavList;
};

const DocsSide = (props) => {
  const { className } = props;
  return (
    <aside className={classNames(styles.aside, className)}>
      {sideList.map((item, k) =>
        item.component ? (
          <NavLink
            key={item.path}
            className={styles.nav}
            to={`/components/${item.path}`}
          >
            {item.name}
          </NavLink>
        ) : (
          <h3 key={k} className={styles.label}>
            {item.name}
          </h3>
        )
      )}
    </aside>
  );
};

const MemoDocsSide = memo(DocsSide);

export default MemoDocsSide;
