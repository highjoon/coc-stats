import React from "react";

import Image from "next/image";
import { flexColumn } from "styles/globalStyles";

interface IClanInfoCardProps {
  imgUrl: string;
  name: string;
  tag: string;
  type: string;
  clanLevel: number;
  countryName?: string;
  description: string;
}

function ClanInfoCard({
  imgUrl,
  name,
  tag,
  type,
  clanLevel,
  countryName,
  description,
}: IClanInfoCardProps) {
  return (
    <div className="flex flex-col w-full p-2 bg-white rounded-lg">
      <div className="flex">
        <div className="flex w-full max-w-xs">
          <div className="pr-6">
            <Image src={imgUrl} width={70} height={70} />
          </div>
          <div className={`${flexColumn} gap-1`}>
            <p className="text-3xl font-extrabold">{name}</p>
            <p className="text-xl font-bold">LV. {clanLevel}</p>
            <p className="font-bold">{tag}</p>
            {countryName && <p className="font-bold">{countryName}</p>}
            <p>{type === "open" ? "가입 가능" : "가입 불가능"}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-7">
          <div className={`${flexColumn} items-center`}>
            <p>클랜 포인트</p>
            <p>22548</p>
          </div>
          <div className={`${flexColumn} items-center`}>
            <p>클랜전 포인트</p>
            <p>23438</p>
          </div>
          <div className={`${flexColumn} items-center`}>
            <p>클랜전 빈도</p>
            <p>항상</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6 bg-red-300">
        <div className="flex flex-col">
          <span className="text-xl font-bold">클랜 소개</span>
          <span>{description}</span>
        </div>
        <div className="flex flex-col bg-green-400">
          <span className="text-lg font-bold">클랜전 빈도</span>
          <span>항상</span>
        </div>
      </div>
    </div>
  );
}

export default ClanInfoCard;
