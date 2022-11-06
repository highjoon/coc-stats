import React from "react";
import ClanInfoCard from "components/clan/clanInfoCard";
import ClanMemberList from "components/clan/clanMemberList";
import { mockClanDetailData } from "utils/mockData";

function ClanSearchResult() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <ClanInfoCard
        imgUrl={mockClanDetailData.badgeUrls.small}
        name={mockClanDetailData.name}
        tag={mockClanDetailData.tag}
        type={mockClanDetailData.type}
        clanLevel={mockClanDetailData.clanLevel}
        countryName={mockClanDetailData.location?.name}
        description={mockClanDetailData.description}
      />
      <ClanInfoCard
        clanPoints={mockClanDetailData.clanPoints}
        clanVersusPoints={mockClanDetailData.clanVersusPoints}
      />
      <ClanInfoCard
        warFrequency={mockClanDetailData.warFrequency}
        warWinStreak={mockClanDetailData.warWinStreak}
        warWins={mockClanDetailData.warWins}
        warTies={mockClanDetailData.warTies}
        warLosses={mockClanDetailData.warLosses}
        warLeague={mockClanDetailData.warLeague}
        isWarLogPublic={mockClanDetailData.isWarLogPublic}
      />
      <ClanMemberList />
    </section>
  );
}

export default ClanSearchResult;
