import React from "react";
import PlayerInfoCard from "components/playerInfoCard";
import UnitCard from "components/common/unitCard";
import {
  mockBuilderTroopsData,
  mockPetsData,
  mockSiegeUnitsData,
  mockSuperUnitsData,
} from "utils/mockData";
import { flexColumnCenter } from "styles/globalStyles";
import { APIPlayer } from "types/api";

interface IPlayerSearchResultProps {
  playerData: APIPlayer;
}

function PlayerSearchResult({ playerData }: IPlayerSearchResultProps) {
  return (
    <section
      className={`${flexColumnCenter} p-4 mt-5 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
    >
      <PlayerInfoCard
        title={playerData.name}
        level={playerData.expLevel}
        tag={playerData.tag}
        imgUrl={playerData.league?.iconUrls.small}
        labels={playerData.labels}
        warStars={playerData.warStars}
        trophies={playerData.trophies}
        bestTrophies={playerData.bestTrophies}
        attackWins={playerData.attackWins}
        defenseWins={playerData.defenseWins}
      />
      <PlayerInfoCard
        title={playerData.clan?.name}
        level={playerData.clan?.clanLevel}
        tag={playerData.clan?.tag}
        imgUrl={playerData.clan?.badgeUrls.small}
        clanRole={playerData.role}
        warPreference={playerData.warPreference}
        donations={playerData.donations}
        donationsReceived={playerData.donationsReceived}
        clanCapitalContributions={playerData.clanCapitalContributions}
      />
      <PlayerInfoCard
        title="장인기지"
        level={playerData.builderHallLevel}
        versusTrophies={playerData.versusTrophies}
        bestVersusTrophies={playerData.bestVersusTrophies}
        versusBattleWins={playerData.versusBattleWins}
      />
      <UnitCard troops={playerData.troops} />
      <UnitCard troops={mockSuperUnitsData} />
      <UnitCard troops={mockSiegeUnitsData} />
      <UnitCard troops={mockPetsData} />
      <UnitCard troops={mockBuilderTroopsData} />
    </section>
  );
}

export default PlayerSearchResult;
