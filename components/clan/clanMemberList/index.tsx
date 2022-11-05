import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CLAN_ROLE from "constants/clans";
import { mockClanDetailData } from "utils/mockData";
import { flexColumnCenter, flexCenter, flexColumn } from "styles/globalStyles";
import { APIClanMember } from "types/api";

function ClanMemberList() {
  const router = useRouter();

  const moveToPlayerDetail = (tag: string) => {
    router.push({ pathname: `/player/${tag}` });
  };

  return (
    <div className={`${flexColumnCenter} bg-white rounded-lg md:w-full py-2`}>
      <div className="w-full pb-2 text-lg font-bold text-center border-b-2 border-b-default">
        <span>클랜원 </span>
        {mockClanDetailData.members}
        <span>명</span>
      </div>
      {mockClanDetailData.memberList.map((member: APIClanMember) => (
        <div
          key={member.tag}
          role="presentation"
          className="relative flex justify-between w-full p-3 border-b-2 cursor-pointer border-b-default last:border-none last:pb-0"
          onClick={() => moveToPlayerDetail(member.tag)}
        >
          <div className={`${flexColumn} gap-2`}>
            <span
              className={`${flexCenter} absolute top-0 left-0 w-5 h-5 text-xs text-white bg-default`}
            >
              {member.clanRank}
            </span>
            <div className="flex items-center gap-2">
              <Image
                src={member.league.iconUrls.small}
                width={30}
                height={30}
              />
              <div className={`${flexColumn}`}>
                <span className="font-bold">{member.name}</span>
                <span className="text-sm">{member.tag}</span>
              </div>
            </div>
            <div className={`${flexColumn}`}>
              <span className="text-sm">지원한 병력 : {member.donations}</span>
              <span className="text-sm">
                지원 받은 병력 : {member.donationsReceived}
              </span>
            </div>
          </div>
          <span className="font-bold">{CLAN_ROLE[member.role]}</span>
        </div>
      ))}
    </div>
  );
}

export default ClanMemberList;
