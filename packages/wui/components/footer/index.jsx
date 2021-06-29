import React, { useState, useEffect } from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import styles from "./index.css";

const WFooter = () => {
  return (
    <Footer
      className={styles.bg}
      columns={[
        {
          icon: (
            <img
              src="https://cn.vuejs.org/images/icons/favicon-32x32.png"
              alt="vue logo"
            />
          ),
          title: "Vue",
          items: [
            {
              title: "vue@3 UI",
              url: "https://onlylonger.github.io/vue-admin/#/",
              openExternal: true,
            },
          ],
        },
        {
          icon: (
            <img
              src="https://zh-hans.reactjs.org/favicon-32x32.png"
              alt="react logo"
            />
          ),
          title: "React",
          items: [
            {
              title: "react UI",
              url: "https://onlylonger.github.io/react-admin/#/",
              openExternal: true,
            },
          ],
        },
      ]}
      bottom="Onlylonger ❤️ ShariseMo"
    ></Footer>
  );
};

export default WFooter;
