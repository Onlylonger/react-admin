import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./index.css";
import ThemePng from "../../images/theme-index-blue.png";

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header />
      <h1 className={styles.title}>UI建站工具</h1>
      <p className={styles.desc}>
        WUI，从前端到产品设计规范的桌面库-个人学习型项目
      </p>
      {/* 图片临时用 */}
      <img className={styles.img} src={ThemePng} alt="theme img" />
      <Footer />
    </>
  );
};

export default Index;
