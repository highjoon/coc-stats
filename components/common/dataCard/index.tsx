import React from "react";
import Image from "next/image";
import CLAN_ROLE from "constants/clans";
import { Iprops } from "./types";

function DataCard({
  tag,
  rank,
  imgUrl,
  name,
  level,
  members,
  points,
  donations,
  donationsReceived,
  role,
  onClickHandler,
}: Iprops) {
  return (
    <div
      role="presentation"
      className="relative flex items-center justify-between w-full px-20 py-3 border-b-2 cursor-pointer md:p-2 border-b-default last:border-none last:pb-0"
      onClick={() => onClickHandler(tag)}
    >
      <div className="flex flex-col">
        <span className="absolute top-0 left-0 flex justify-center w-5 h-5 text-xs text-white bg-default">
          {rank}
        </span>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 md:w-11 md:h-11">
            {imgUrl && <Image src={imgUrl} layout="fill" />}
          </div>
          <div className="flex flex-col w-48 md:w-28">
            <span className="font-bold">{name}</span>
            <span className="text-sm">LV. {level}</span>
            <span className="text-sm">{tag}</span>
            {role !== undefined && (
              <span className="flex items-center w-16 font-bold md:items-start">
                {CLAN_ROLE[role]}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 w-60 md:w-24 md:flex md:gap-1">
        <div className="flex flex-col w-32">
          {members !== undefined && (
            <>
              <span className="font-bold">멤버</span>
              <span className="text-sm">{members}명</span>
            </>
          )}
          {donations !== undefined && (
            <>
              <span className="font-bold">지원한 병력</span>
              <span className="text-sm">{donations}명</span>
            </>
          )}
        </div>
        <div className="flex flex-col items-start w-32">
          {points !== undefined && (
            <>
              <span className="font-bold">포인트</span>
              <span className="text-sm">{points}</span>
            </>
          )}
          {donationsReceived !== undefined && (
            <>
              <span className="font-bold">지원 받은 병력</span>
              <span className="text-sm">{donationsReceived}명</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataCard;
