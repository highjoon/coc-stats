/* eslint-disable react/require-default-props */
import React from "react";

import Image from "next/image";

import { flexColumn } from "styles/globalStyles";
import { CLAN_ROLE } from "constants/clans";

interface IProps {
  title?: string;
  level: string;
  tag?: string;
  imgUrl: string;
  clanRole?: string;
  warPreference?: string;
  infoList: Array<{ title: string; content: string }>;
}

function ResultInfoCard({
  title,
  level,
  tag,
  imgUrl,
  clanRole,
  warPreference,
  infoList,
}: IProps) {
  return (
    <div className="flex p-2 bg-white rounded-lg">
      <div className="flex w-[220px] gap-2">
        <div className="pr-3">
          <Image src={imgUrl} width={70} height={70} />
        </div>
        <div className={`${flexColumn} gap-1`}>
          {title && <p className="text-3xl font-extrabold">{title}</p>}
          <p className="text-xl font-bold">LV. {level}</p>
          {clanRole && <p>{CLAN_ROLE[clanRole]}</p>}
          {warPreference && (
            <p>클랜전 {warPreference === "in" ? "참여" : "미참여"}</p>
          )}
          {tag && <p className="text-sm">{tag}</p>}
        </div>
      </div>
      <div className="flex flex-wrap ml-4 mb-4 gap-x-20 gap-y-3 w-[500px]">
        {infoList.map((info) => (
          <div>
            <p className="text-lg font-semibold">{info.title}</p>
            <p>{info.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultInfoCard;
