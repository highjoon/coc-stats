import React, { ReactNode } from "react";

interface IRankingsSelectBox {
  toggleHandler: () => void;
  name: string;
  children: ReactNode;
}

function RankingsSelectBox({
  toggleHandler,
  name,
  children,
}: IRankingsSelectBox) {
  return (
    <div
      role="presentation"
      className="relative w-full h-12 p-3 text-center text-white rounded-md cursor-pointer bg-layout"
      onClick={toggleHandler}
    >
      {name}
      {children}
    </div>
  );
}

export default RankingsSelectBox;
