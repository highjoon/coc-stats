import React from "react";

import Image from "next/image";

import { flexBetween, flexColumn, flexColumnCenter } from "styles/globalStyles";

import { CLAN_ROLE } from "constants/clans";

import { APILabel } from "types/api";

interface IPlayerInfoCardProps {
  title?: string;
  level?: string;
  tag?: string;
  imgUrl?: string;
  clanRole?: string;
  warPreference?: string;
  infoList?: Array<{ title: string; content: string }>;
  labels?: APILabel[];
}

function PlayerInfoCard({
  title,
  level,
  tag,
  imgUrl,
  clanRole,
  warPreference,
  infoList,
  labels,
}: IPlayerInfoCardProps) {
  return (
    <div
      className={`${flexColumnCenter} gap-2 bg-white rounded-lg md:w-full py-2 px-10`}
    >
      <div className="relative flex rounded-md md:w-14 md:h-14">
        {imgUrl && (
          <Image
            src={imgUrl}
            layout="fill"
            objectFit="cover"
            alt="player-image"
          />
        )}
      </div>
      <div className={`${flexColumnCenter}`}>
        <div className="flex items-end gap-3">
          <span className="text-sm font-bold">LV. {level}</span>
          <span className="text-3xl font-extrabold">{title}</span>
        </div>
        <span>{tag}</span>
      </div>
      {clanRole && warPreference && (
        <div className={`${flexColumnCenter} gap-2`}>
          <p>{CLAN_ROLE[clanRole]}</p>
          <p>클랜전 {warPreference === "in" ? "참여" : "미참여"}</p>
        </div>
      )}
      {labels && (
        <div className={`${flexColumn} gap-2`}>
          {labels.map((label) => (
            <div
              key={label.id}
              className="flex items-center gap-2 px-2 text-white rounded-md bg-header"
            >
              <Image src={label.iconUrls.small} width={30} height={30} />
              <span>{label.name}</span>
            </div>
          ))}
        </div>
      )}
      {infoList && (
        <div className={`${flexColumn} w-full gap-2`}>
          {infoList.map((info) => (
            <div key={info.title} className={`${flexBetween} w-full`}>
              <span>{info.title}</span>
              <span>{info.content}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayerInfoCard;
