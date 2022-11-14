/* eslint-disable no-nested-ternary */
import React from "react";
import Image from "next/image";
import { IProps } from "./types";

function UnitCard({ troops, category, spells, title }: IProps) {
  return (
    <section className="w-full bg-white rounded-lg">
      <div className="py-2 text-xl font-bold text-center border-b-2 border-b-layout">
        {title}
      </div>
      <div className="grid grid-cols-8 gap-5 py-2 place-items-center md:gap-1 md:grid-cols-4 sm:grid-cols-3">
        {troops &&
          troops.map((troop) => (
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
                  troop.level === troop.maxLevel
                    ? "bg-yellow-500"
                    : "bg-default"
                } rounded-sm bottom-0 right-0`}
              >
                {troop.level}
              </div>
            </div>
          ))}
        {spells &&
          spells.map((spell) => (
            <div
              key={`${spell.name}-${spell.village}`}
              className={`relative flex flex-col items-center justify-center w-16 h-16 border-2 rounded-md bg-slate-400 ${
                spell.level === spell.maxLevel
                  ? "border-yellow-500"
                  : "border-slate-500"
              }`}
            >
              <Image
                src={`/assets/images/spells/${spell.name
                  .replaceAll(".", "")
                  .split(" ")
                  .join("")}.webp`}
                layout="fill"
                objectFit="cover"
              />
              <div
                className={`absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 p-1 text-white rounded-sm ${
                  spell.level === spell.maxLevel
                    ? "bg-yellow-500"
                    : "bg-default"
                }`}
              >
                {spell.level}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default UnitCard;
