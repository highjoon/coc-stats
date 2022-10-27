import React from "react";

import Header from "components/header";

interface ILayoutProp {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProp) {
  return (
    <div className="flex flex-col items-center w-full h-screen p-0 m-0 bg-white">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
