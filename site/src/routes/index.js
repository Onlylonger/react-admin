import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "../pages/index";
import Docs from "../pages/docs";
import Assets from "../pages/assets";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/components",
    component: Docs,
  },
  {
    path: "/assets",
    component: Assets,
  },
];

export default routes;
