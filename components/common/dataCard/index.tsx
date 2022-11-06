import React from "react";
import Image from "next/image";
import CLAN_ROLE from "constants/clans";
import { flexBetweenCenter, flexCenter, flexColumn } from "styles/globalStyles";
import { IDataCardProps } from "./types";

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
}: IDataCardProps) {
  return (
    <div
      role="presentation"
      className={`${flexBetweenCenter} relative w-full py-3 px-20 border-b-2 cursor-pointer md:p-2 border-b-default last:border-none last:pb-0`}
      onClick={() => onClickHandler(tag)}
    >
      <div className={`${flexColumn} gap-2`}>
        <span
          className={`${flexCenter} absolute top-0 left-0 w-5 h-5 text-xs text-white bg-default`}
        >
          {rank}
        </span>
        <div className="flex items-center gap-2 w-44">
          <div className="relative w-20 h-14 md:w-11 md:h-11">
            <Image src={imgUrl} layout="fill" />
          </div>
          <div className={`${flexColumn} w-32 md:w-28`}>
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
      <div
        className={`${flexCenter} w-60 md:w-24 gap-3 md:${flexColumn} md:gap-1`}
      >
        <div className={`${flexColumn} items-start w-full`}>
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
        <div className={`${flexColumn} items-start w-full`}>
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
