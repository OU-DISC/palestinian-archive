import { FC } from "react";
import Home from "./screens/Home";

interface RouteConfig {
  path: string;
  label: string;
  component: FC;
}

const routes: RouteConfig[] = [
  { path: "/", label: "Home", component: Home },
  { path: "/", label: "Page 1", component: Home },
  { path: "/", label: "Page 2", component: Home },
];

export default routes;
