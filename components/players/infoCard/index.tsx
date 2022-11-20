/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import CLAN_ROLE from "constants/clans";
import { IProps } from "./types";

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
}: IProps) {
  const router = useRouter();

  const moveToClanDetail = () => {
    if (!tag || !clanRole) return;
    router.push(`/clans/${encodeURIComponent(tag)}`);
  };

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
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-end gap-3">
          <span className="text-sm font-bold">LV. {level}</span>
          <span className="text-3xl font-extrabold md:text-lg">{title}</span>
        </div>
        <span
          onClick={moveToClanDetail}
          role="presentation"
          className={`font-semibold md:text-sm ${
            clanRole ? "hover:text-header cursor-pointer" : ""
          }`}
        >
          {tag}
        </span>
      </div>
      {clanRole && warPreference ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <p>{CLAN_ROLE[clanRole]}</p>
          <p>클랜전 {warPreference === "in" ? "참여" : "미참여"}</p>
        </div>
      ) : (
        <></>
      )}
      {labels ? (
        <div className="flex flex-col gap-2">
          {labels.map((label) => (
            <div
              key={label.id}
              className="flex items-center gap-2 px-2 text-white rounded-md bg-header"
            >
              <Image
                src={label.iconUrls.small}
                width={30}
                height={30}
                alt="label"
              />
              <span>{label.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col w-full gap-2 md:text-sm">
        {warStars ? (
          <div className="flex justify-between w-full">
            <span>획득한 별</span>
            <span>{warStars}</span>
          </div>
        ) : (
          <></>
        )}
        {trophies ? (
          <div className="flex justify-between w-full">
            <span>트로피</span>
            <span>{trophies}</span>
          </div>
        ) : (
          <></>
        )}
        {bestTrophies ? (
          <div className="flex justify-between w-full">
            <span>트로피 최고 기록</span>
            <span>{bestTrophies}</span>
          </div>
        ) : (
          <></>
        )}
        {attackWins ? (
          <div className="flex justify-between w-full">
            <span>공격 승리</span>
            <span>{attackWins}</span>
          </div>
        ) : (
          <></>
        )}
        {defenseWins ? (
          <div className="flex justify-between w-full">
            <span>방어 승리</span>
            <span>{defenseWins}</span>
          </div>
        ) : (
          <></>
        )}
        {donations ? (
          <div className="flex justify-between w-full">
            <span>지원한 병력 수</span>
            <span>{donations}</span>
          </div>
        ) : (
          <></>
        )}
        {donationsReceived ? (
          <div className="flex justify-between w-full">
            <span>지원 받은 병력 수</span>
            <span>{donationsReceived}</span>
          </div>
        ) : (
          <></>
        )}
        {clanCapitalContributions ? (
          <div className="flex justify-between w-full">
            <span>클랜 캐피탈 기여</span>
            <span>{clanCapitalContributions}</span>
          </div>
        ) : (
          <></>
        )}
        {versusTrophies ? (
          <div className="flex justify-between w-full">
            <span>장인 기지 트로피</span>
            <span>{versusTrophies}</span>
          </div>
        ) : (
          <></>
        )}
        {bestVersusTrophies ? (
          <div className="flex justify-between w-full">
            <span>장인 기지 트로피 최고 기록</span>
            <span>{bestVersusTrophies}</span>
          </div>
        ) : (
          <></>
        )}
        {versusBattleWins ? (
          <div className="flex justify-between w-full">
            <span>장인 기지 공격 승리</span>
            <span>{versusBattleWins}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default PlayerInfoCard;
