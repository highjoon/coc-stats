import React from "react";
import Image from "next/image";
import { IProps } from "./types";

function ClanInfoCard({
  imgUrl,
  name,
  tag,
  type,
  clanLevel,
  countryName,
  description,
  clanPoints,
  clanVersusPoints,
  warFrequency,
  warWinStreak,
  warWins,
  warTies,
  warLosses,
  isWarLogPublic,
  warLeague,
}: IProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 px-20 py-2 bg-white rounded-lg md:px-4">
      {imgUrl && (
        <div className="relative flex rounded-md w-14 h-14">
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            alt="player-image"
          />
        </div>
      )}
      {clanLevel && name && tag && countryName && (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-end gap-3">
            <span className="text-sm font-bold">LV. {clanLevel}</span>
            <span className="text-3xl font-extrabold">{name}</span>
          </div>
          <span className="font-semibold">{tag}</span>
          {countryName && <p className="font-bold">{countryName}</p>}
          <p>{type === "open" ? "가입 가능" : "가입 불가능"}</p>
        </div>
      )}
      {description && (
        <div className="flex flex-col flex-wrap items-center justify-center w-full gap-2">
          <p className="text-xl font-bold">클랜 소개</p>
          <p>{description}</p>
        </div>
      )}
      {clanPoints && clanVersusPoints && (
        <div className="flex flex-col justify-between w-full gap-2">
          <div className="flex justify-between">
            <p>클랜 포인트</p>
            <p>{clanPoints}</p>
          </div>
          <div className="flex justify-between">
            <p>클랜전 포인트</p>
            <p>{clanVersusPoints}</p>
          </div>
        </div>
      )}
      {isWarLogPublic === true && warLeague && (
        <div className="flex flex-col justify-between w-full gap-2">
          <div className="flex items-center justify-center text-lg font-bold">
            {warLeague?.name}
          </div>
          <div className="flex justify-between">
            <span>클랜전 빈도</span>
            {warFrequency === "always" && <span>항상</span>}
            {warFrequency === "moreThanOncePerWeek" && <span>주 1회 이상</span>}
            {warFrequency === "oncePerWeek" && <span>주 1회</span>}
            {warFrequency === "lessThanOncePerWeek" && <span>주 1회 이하</span>}
            {warFrequency === "never" && <span>하지 않음</span>}
            {warFrequency === "unknown" && <span>알 수 없음</span>}
          </div>
          <div className="flex justify-between">
            <p>연승</p>
            {warWinStreak}회
          </div>
          <div className="flex justify-between">
            <p>승리</p>
            {warWins}회
          </div>
          <div className="flex justify-between">
            <p>무승부</p>
            {warTies}회
          </div>
          <div className="flex justify-between">
            <p>패배</p>
            {warLosses}회
          </div>
        </div>
      )}
      {isWarLogPublic === false && (
        <div className="flex items-center flex-center">전적 비공개</div>
      )}
    </div>
  );
}

export default ClanInfoCard;
