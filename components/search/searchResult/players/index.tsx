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
      <UnitCard troops={playerData.heroes} category="heroes" title="영웅" />
      <UnitCard troops={troopsData.home} category="home" title="마을회관" />
      <UnitCard
        troops={troopsData.superTroops}
        category="home"
        title="슈퍼유닛"
      />
      <UnitCard troops={troopsData.pets} category="home" title="펫" />
      <UnitCard
        troops={troopsData.siegeMachines}
        category="home"
        title="시즈머신"
      />
      <UnitCard spells={playerData.spells} category="home" title="마법" />
      <UnitCard
        troops={troopsData.builderBase}
        category="builderBase"
        title="장인기지"
      />
    </section>
  );
}

export default PlayerSearchResult;
