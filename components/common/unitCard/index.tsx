import React from "react";

import Image from "next/image";

import { flexCenter, flexColumnCenter } from "styles/globalStyles";

interface IUnitCardProps {
  troops: Array<{
    name: string;
    level: number;
    maxLevel: number;
    village: string;
    superTroopIsActive?: boolean;
  }>;
}

function UnitCard({ troops }: IUnitCardProps) {
  return (
    <div className="grid w-full grid-cols-9 gap-6 p-2 bg-white rounded-lg place-items-center">
      {troops.map((troop) => (
        <div
          key={`${troop.name}-${troop.village}`}
          className={`${flexColumnCenter} w-16 h-16 relative bg-slate-400 rounded-md border-2 ${
            troop.level === troop.maxLevel
              ? "border-pink-500"
              : "border-slate-400"
          }`}
        >
          <Image
            src={`/assets/images/troops/${troop.village}/${troop.name
              .replaceAll(".", "")
              .split(" ")
              .join("")}.webp`}
            layout="fill"
            objectFit="cover"
          />
          <div
            className={`${flexCenter} absolute p-1 w-6 h-6 text-white ${
              troop.level === troop.maxLevel ? "bg-pink-500" : "bg-default"
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
