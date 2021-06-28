import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">首页</Link>
      <Link to="/components">组件</Link>
      <Link to="/assets">资源</Link>
    </div>
  );
};

export default Header;
