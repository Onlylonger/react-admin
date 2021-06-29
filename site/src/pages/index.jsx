import React, { useState } from "react";
import Layout from "../components/layout";
import WDialog from "@shilong/wui/components/dialog";

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
    </Layout>
  );
};

export default Index;
