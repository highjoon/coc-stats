import React from "react";
import { IProps } from "./types";

function Layout({ children }: IProps) {
  return (
    <div className="flex items-center justify-center px-4 mt-16">
      {children}
    </div>
  );
}

export default Layout;
