/* eslint-disable react/require-default-props */
import React from "react";

import Image from "next/image";

import { flexColumn } from "styles/globalStyles";
import { CLAN_ROLE } from "constants/clans";

interface IProps {
  title?: string;
  level?: string;
  tag?: string;
  imgUrl?: string;
  clanRole?: string;
  warPreference?: string;
  infoList?: Array<{ title: string; content: string }>;
  labels?: Array<{
    id: number;
    name: string;
    iconUrls: { small: string; medium: string };
  }>;
}

function ResultInfoCard({
  title,
  level,
  tag,
  imgUrl,
  clanRole,
  warPreference,
  infoList,
  labels,
}: IProps) {
  return (
    <div className="flex w-full gap-3 p-2 bg-white rounded-lg">
      <div className="flex w-full max-w-xs gap-2">
        <div className="pr-6">
          {imgUrl && <Image src={imgUrl} width={70} height={70} />}
        </div>
        <div className={`${flexColumn} gap-1`}>
          {title && <p className="text-3xl font-extrabold">{title}</p>}
          {level && <p className="text-xl font-bold">LV. {level}</p>}
          {clanRole && <p>{CLAN_ROLE[clanRole]}</p>}
          {warPreference && (
            <p>클랜전 {warPreference === "in" ? "참여" : "미참여"}</p>
          )}
          {tag && <p className="text-sm">{tag}</p>}
          {labels &&
            labels.map((label) => (
              <div key={label.id} className="flex items-center gap-2">
                <Image src={label.iconUrls.small} width={30} height={30} />
                <span>{label.name}</span>
              </div>
            ))}
        </div>
      </div>
      {infoList && (
        <div className="flex flex-wrap mb-4 ml-4 gap-x-20 gap-y-3">
          {infoList.map((info) => (
            <div key={info.title}>
              <p className="text-lg font-semibold">{info.title}</p>
              <p>{info.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultInfoCard;
