import React from "react";
import RcDialog from "rc-dialog";
import "rc-dialog/assets/index.css";
import "rc-dialog/assets/bootstrap.css";
import styles from "./styles/modal.css";

const WDialog = (props) => {
  return (
    <RcDialog
      style={{ width: 600 }}
      // prefixCls={"demo"}
      animation="slide-fade"
      maskAnimation="fade"
      className={styles.modal}
      {...props}
    >
      <p>first dialog</p>
      <div className={styles.flex}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, debitis reiciendis sed alias sit aliquam mollitia expedita quo distinctio quae corrupti minima dicta magni commodi vitae doloribus, excepturi modi ducimus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, a maxime natus eaque, suscipit quasi dolorem doloremque aperiam sunt nisi impedit minima placeat voluptate sapiente omnis iste cum tenetur obcaecati?</p>
      </div>
    </RcDialog>
  );
};

export default WDialog;
