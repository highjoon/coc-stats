import React from "react";
import { ILayoutProp } from "./types";

function Layout({ children }: ILayoutProp) {
  return <div className="px-4 mt-16">{children}</div>;
}

export default Layout;
