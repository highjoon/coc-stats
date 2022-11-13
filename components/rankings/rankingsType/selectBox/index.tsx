import React from "react";
import { IProps } from "./types";

function RankingsSelectBox({ toggleHandler, name, children }: IProps) {
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
