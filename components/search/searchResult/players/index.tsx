import React from "react";
import PlayerInfoCard from "components/players/infoCard";
import UnitCard from "components/common/unitCard";
import { IProps } from "./types";

function PlayerSearchResult({ playerData, troopsData }: IProps) {
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
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
      <UnitCard troops={troopsData.home} category="home" />
      <UnitCard troops={playerData.heroes} category="heroes" />
      <UnitCard troops={troopsData.pets} category="home" />
      <UnitCard troops={troopsData.siegeMachines} category="home" />
      <UnitCard troops={troopsData.builderBase} category="builderBase" />
    </section>
  );
}

export default PlayerSearchResult;
