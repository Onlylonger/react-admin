import React, { useState } from "react";
import Layout from "../components/layout";
import LogoAsset from "../images/logo.png";

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      indexaa
      <img src={LogoAsset} alt="" />
    </Layout>
  );
};

export default Index;
