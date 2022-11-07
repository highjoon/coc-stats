import React from "react";
import ClanInfoCard from "components/clan/clanInfoCard";
import ClanMemberList from "components/clan/clanMemberList";
import { APIClan } from "types/api";

interface IClanSearchResultProps {
  clanData: APIClan;
}

function ClanSearchResult({ clanData }: IClanSearchResultProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <ClanInfoCard
        imgUrl={clanData.badgeUrls.small}
        name={clanData.name}
        tag={clanData.tag}
        type={clanData.type}
        clanLevel={clanData.clanLevel}
        countryName={clanData.location?.name}
        description={clanData.description}
      />
      <ClanInfoCard
        clanPoints={clanData.clanPoints}
        clanVersusPoints={clanData.clanVersusPoints}
      />
      <ClanInfoCard
        warFrequency={clanData.warFrequency}
        warWinStreak={clanData.warWinStreak}
        warWins={clanData.warWins}
        warTies={clanData.warTies}
        warLosses={clanData.warLosses}
        warLeague={clanData.warLeague}
        isWarLogPublic={clanData.isWarLogPublic}
      />
      <ClanMemberList
        memberList={clanData.memberList}
        members={clanData.members}
      />
    </section>
  );
}

export default ClanSearchResult;
