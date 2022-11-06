import React from "react";
import { flexCenter } from "styles/globalStyles";
import { ILayoutProp } from "./types";

function Layout({ children }: ILayoutProp) {
  return <div className={`${flexCenter} px-4 mt-16`}>{children}</div>;
}

export default Layout;
