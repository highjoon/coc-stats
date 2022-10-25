import React from "react";

import Header from "components/header";

interface ILayoutProp {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProp) {
  return (
    <div className="w-full h-screen p-0 m-0 bg-layout">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
