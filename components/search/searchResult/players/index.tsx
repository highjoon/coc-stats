import React from "react";
import { useRouter } from "next/dist/client/router";
import PlayerInfoCard from "components/players/infoCard";
import UnitCard from "components/common/unitCard";
import SearchError from "components/search/searchError";
import LoadingSpinner from "components/common/loadingSpinner";
import useGetPlayerInfo from "hooks/useGetPlayer";

function PlayerSearchResult() {
  const router = useRouter();

  const tag = decodeURIComponent(router.asPath.split("/")[2]);

  const { data, isLoading, isError, error } = useGetPlayerInfo({ tag });

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 bg-default">
        <LoadingSpinner />
      </section>
    );
  }

  if (!data || isError) {
    const message = error?.response?.data.message
      ? error?.response?.data.message
      : "문제가 발생했습니다.";

    return <SearchError message={message} />;
  }

  const { result, troops } = data;

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <PlayerInfoCard
        title={result.name}
        level={result.expLevel}
        tag={result.tag}
        imgUrl={result.league?.iconUrls.small}
        labels={result.labels}
        warStars={result.warStars}
        trophies={result.trophies}
        bestTrophies={result.bestTrophies}
        attackWins={result.attackWins}
        defenseWins={result.defenseWins}
      />
      <PlayerInfoCard
        title={result.clan?.name}
        level={result.clan?.clanLevel}
        tag={result.clan?.tag}
        imgUrl={result.clan?.badgeUrls.small}
        clanRole={result.role}
        warPreference={result.warPreference}
        donations={result.donations}
        donationsReceived={result.donationsReceived}
        clanCapitalContributions={result.clanCapitalContributions}
      />
      <PlayerInfoCard
        title="장인기지"
        level={result.builderHallLevel}
        versusTrophies={result.versusTrophies}
        bestVersusTrophies={result.bestVersusTrophies}
        versusBattleWins={result.versusBattleWins}
      />
      {result.heroes.length > 0 && (
        <UnitCard troops={result.heroes} category="heroes" title="영웅" />
      )}
      {troops.home.length > 0 && (
        <UnitCard troops={troops.home} category="home" title="마을회관" />
      )}
      {troops.superTroops.length > 0 && (
        <UnitCard
          troops={troops.superTroops}
          category="home"
          title="슈퍼유닛"
        />
      )}
      {troops.pets.length > 0 && (
        <UnitCard troops={troops.pets} category="home" title="펫" />
      )}
      {troops.siegeMachines.length > 0 && (
        <UnitCard
          troops={troops.siegeMachines}
          category="home"
          title="시즈머신"
        />
      )}
      {result.spells.length > 0 && (
        <UnitCard spells={result.spells} category="home" title="마법" />
      )}
      {troops.builderBase.length > 0 && (
        <UnitCard
          troops={troops.builderBase}
          category="builderBase"
          title="장인기지"
        />
      )}
    </section>
  );
}

export default PlayerSearchResult;
