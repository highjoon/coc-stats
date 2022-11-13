/* eslint-disable no-nested-ternary */
import React from "react";
import Image from "next/image";
import { IProps } from "./types";

function UnitCard({ troops, category }: IProps) {
  return (
    <div className="grid w-full grid-cols-8 gap-5 p-2 bg-white rounded-lg place-items-center md:gap-1 md:grid-cols-4 sm:grid-cols-3">
      {troops.map((troop) => (
        <div
          key={`${troop.name}-${troop.village}`}
          className={`flex flex-col justify-center items-center w-16 h-16 relative bg-slate-400 rounded-md border-2 ${
            troop.superTroopIsActive
              ? "border-pink-500"
              : troop.level === troop.maxLevel
              ? "border-yellow-500"
              : "border-slate-400"
          }`}
        >
          <Image
            src={`/assets/images/troops/${category}/${troop.name
              .replaceAll(".", "")
              .split(" ")
              .join("")}.webp`}
            layout="fill"
            objectFit="cover"
          />
          <div
            className={`flex justify-center items-center absolute p-1 w-6 h-6 text-white ${
              troop.superTroopIsActive ? "bg-pink-500" : ""
            } ${
              troop.level === troop.maxLevel ? "bg-yellow-500" : "bg-default"
            } rounded-sm bottom-0 right-0`}
          >
            {troop.level}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UnitCard;
