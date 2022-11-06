import React from "react";
import { useRouter } from "next/router";
import DataCard from "components/common/dataCard";
import { mockClanDetailData } from "utils/mockData";
import { APIClanMember } from "types/api";

function ClanMemberList() {
  const router = useRouter();

  const moveToPlayerDetail = (tag: string) => {
    router.push({ pathname: `/player/${encodeURIComponent(tag)}` });
  };

  return (
    <div className="flex flex-col justify-center w-full py-2 bg-white rounded-lg">
      <div className="w-full pb-2 text-lg font-bold text-center border-b-2 border-b-default">
        <span>클랜원 </span>
        {mockClanDetailData.members}
        <span>명</span>
      </div>
      {mockClanDetailData.memberList.map((member: APIClanMember) => (
        <DataCard
          key={member.tag}
          tag={member.tag}
          rank={member.clanRank}
          imgUrl={member.league.iconUrls.small}
          name={member.name}
          donations={member.donations}
          donationsReceived={member.donationsReceived}
          role={member.role}
          level={member.expLevel}
          onClickHandler={moveToPlayerDetail}
        />
      ))}
    </div>
  );
}

export default ClanMemberList;
