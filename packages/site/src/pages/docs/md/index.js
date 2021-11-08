import ChangeLog from "./changelog.mdx";
import Install from "./install.mdx";

const Keys = {};
["GUIDE"].forEach((v, k) => (Keys[v] = k));

const { GUIDE } = Keys;

const sideList = [
  {
    name: "更新日志",
    path: "changelog",
    component: ChangeLog,
  },
  {
    name: "开发指南",
    key: GUIDE,
  },
  {
    name: "安装",
    path: "install",
    component: Install,
  },
];

export default sideList;
