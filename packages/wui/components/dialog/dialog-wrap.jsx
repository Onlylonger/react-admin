import React from "react";
import RcDialog from "rc-dialog";
// import "rc-dialog/assets/index.css";
// import "rc-dialog/assets/bootstrap.css";
import styles from "./styles/modal.css";

const WDialog = (props) => {
  return (
    <RcDialog
      style={{ width: 600 }}
      prefixCls={"demo"}
      // animation="slide-fade"
      // maskAnimation="fade"
      className={styles.modal}
      {...props}
    >
      <p>first dialog</p>
    </RcDialog>
  );
};

export default WDialog;
