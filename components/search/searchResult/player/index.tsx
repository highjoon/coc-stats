import React from "react";
import PlayerInfoCard from "components/playerInfoCard";
import UnitCard from "components/common/unitCard";
import {
  mockBuilderTroopsData,
  mockPetsData,
  mockPlayerData,
  mockSiegeUnitsData,
  mockSuperUnitsData,
} from "utils/mockData";
import { flexColumnCenter } from "styles/globalStyles";

function PlayerSearchResult() {
  return (
    <section
      className={`${flexColumnCenter} p-4 mt-5 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
    >
      <PlayerInfoCard
        title={mockPlayerData.name}
        level={mockPlayerData.expLevel}
        tag={mockPlayerData.tag}
        imgUrl={mockPlayerData.league?.iconUrls.small}
        labels={mockPlayerData.labels}
        warStars={mockPlayerData.warStars}
        trophies={mockPlayerData.trophies}
        bestTrophies={mockPlayerData.bestTrophies}
        attackWins={mockPlayerData.attackWins}
        defenseWins={mockPlayerData.defenseWins}
      />
      <PlayerInfoCard
        title={mockPlayerData.clan?.name}
        level={mockPlayerData.clan?.clanLevel}
        tag={mockPlayerData.clan?.tag}
        imgUrl={mockPlayerData.clan?.badgeUrls.small}
        clanRole={mockPlayerData.role}
        warPreference={mockPlayerData.warPreference}
        donations={mockPlayerData.donations}
        donationsReceived={mockPlayerData.donationsReceived}
        clanCapitalContributions={mockPlayerData.clanCapitalContributions}
      />
      <PlayerInfoCard
        title="장인기지"
        level={mockPlayerData.builderHallLevel}
        versusTrophies={mockPlayerData.versusTrophies}
        bestVersusTrophies={mockPlayerData.bestVersusTrophies}
        versusBattleWins={mockPlayerData.versusBattleWins}
      />
      <UnitCard troops={mockPlayerData.troops} />
      <UnitCard troops={mockSuperUnitsData} />
      <UnitCard troops={mockSiegeUnitsData} />
      <UnitCard troops={mockPetsData} />
      <UnitCard troops={mockBuilderTroopsData} />
    </section>
  );
}

export default PlayerSearchResult;
