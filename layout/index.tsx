import React from "react";
import { IProps } from "./types";

function Layout({ children }: IProps) {
  return (
    <div className="w-full pb-10 mt-14">
      <div className="flex items-center justify-center px-4">{children}</div>
    </div>
  );
}

export default Layout;
