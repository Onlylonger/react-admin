import React, { useState } from "react";
import Layout from "../../components/layout";
import styles from "./index.css";
import ThemePng from "../../images/theme-index-blue.png";

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <h1 className={styles.title}>UI建站工具</h1>
      <p className={styles.desc}>
        WUI，从前端到产品设计规范的桌面库-个人学习型项目
      </p>
      {/* 先临时用着 */}
      <img className={styles.img} src={ThemePng} alt="theme img" />
    </Layout>
  );
};

export default Index;
