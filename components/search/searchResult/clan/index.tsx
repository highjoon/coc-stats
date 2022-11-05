import React from "react";
import ClanInfoCard from "components/clan/clanInfoCard";
import ClanMemberList from "components/clan/clanMemberList";
import { mockClanDetailData } from "utils/mockData";
import { flexColumnCenter } from "styles/globalStyles";

function ClanSearchResult() {
  return (
    <section className={`${flexColumnCenter} pt-5`}>
      <div
        className={`${flexColumnCenter} p-4 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
      >
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
      </div>
    </section>
  );
}

export default ClanSearchResult;
