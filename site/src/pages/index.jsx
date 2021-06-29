import React, { useState } from "react";
import Layout from "../components/layout";
import WDialog from "@shilong/wui/components/dialog";
import WFooter from "@shilong/wui/components/footer";
import LogoAsset from "../images/logo.png";

const Index = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      indexaa
      <button onClick={() => setVisible(!visible)}>toggle</button>
      <WDialog
        title="demo"
        visible={visible}
        onClose={() => setVisible(!visible)}
      ></WDialog>
      <img src={LogoAsset} alt="" />
      <WFooter></WFooter>
    </Layout>
  );
};

export default Index;
