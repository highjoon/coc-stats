import React from "react";

import Header from "components/header";

interface ILayoutProp {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProp) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
