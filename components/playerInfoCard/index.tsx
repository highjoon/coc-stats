import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CLAN_ROLE from "constants/clans";
import { flexBetween, flexColumn, flexColumnCenter } from "styles/globalStyles";
import { IPlayerInfoCardProps } from "./types";

function PlayerInfoCard({
  title,
  level,
  tag,
  imgUrl,
  clanRole,
  warPreference,
  labels,
  warStars,
  trophies,
  bestTrophies,
  attackWins,
  defenseWins,
  donations,
  donationsReceived,
  clanCapitalContributions,
  versusTrophies,
  bestVersusTrophies,
  versusBattleWins,
}: IPlayerInfoCardProps) {
  const router = useRouter();

  const moveToClanDetail = () => {
    if (!tag || !clanRole) return;
    router.push(`/clan/${encodeURIComponent(tag)}`);
  };

  return (
    <div
      className={`${flexColumnCenter} gap-2 bg-white rounded-lg w-full py-2 md:px-4 px-20`}
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
          {level && <span className="text-sm font-bold">LV. {level}</span>}
          <span className="text-3xl font-extrabold">{title}</span>
        </div>
        <span
          onClick={moveToClanDetail}
          role="presentation"
          className={`font-semibold ${
            clanRole ? "hover:text-header cursor-pointer" : ""
          }`}
        >
          {tag}
        </span>
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
      <div className={`${flexColumn} w-full gap-2`}>
        {warStars && (
          <div className={`${flexBetween} w-full`}>
            <span>획득한 별</span>
            <span>{warStars}</span>
          </div>
        )}
        {trophies && (
          <div className={`${flexBetween} w-full`}>
            <span>트로피</span>
            <span>{trophies}</span>
          </div>
        )}
        {bestTrophies && (
          <div className={`${flexBetween} w-full`}>
            <span>트로피 최고 기록</span>
            <span>{bestTrophies}</span>
          </div>
        )}
        {attackWins && (
          <div className={`${flexBetween} w-full`}>
            <span>공격 승리</span>
            <span>{attackWins}</span>
          </div>
        )}
        {defenseWins && (
          <div className={`${flexBetween} w-full`}>
            <span>방어 승리</span>
            <span>{defenseWins}</span>
          </div>
        )}
        {donations && (
          <div className={`${flexBetween} w-full`}>
            <span>지원한 병력 수</span>
            <span>{donations}</span>
          </div>
        )}
        {donationsReceived && (
          <div className={`${flexBetween} w-full`}>
            <span>지원 받은 병력 수</span>
            <span>{donationsReceived}</span>
          </div>
        )}
        {clanCapitalContributions && (
          <div className={`${flexBetween} w-full`}>
            <span>클랜 캐피탈 기여</span>
            <span>{clanCapitalContributions}</span>
          </div>
        )}
        {versusTrophies && (
          <div className={`${flexBetween} w-full`}>
            <span>장인 기지 트로피</span>
            <span>{versusTrophies}</span>
          </div>
        )}
        {bestVersusTrophies && (
          <div className={`${flexBetween} w-full`}>
            <span>장인 기지 트로피 최고 기록</span>
            <span>{bestVersusTrophies}</span>
          </div>
        )}
        {versusBattleWins && (
          <div className={`${flexBetween} w-full`}>
            <span>장인 기지 공격 승리</span>
            <span>{versusBattleWins}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayerInfoCard;
