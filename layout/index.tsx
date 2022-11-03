import React from "react";

interface ILayoutProp {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProp) {
  return <div className="px-4 mt-16">{children}</div>;
}

export default Layout;
