import React from "react";
import { useRouter } from "next/dist/client/router";
import ClanInfoCard from "components/clans/infoCard";
import ClanMemberList from "components/clans/memberList";
import LoadingSpinner from "components/common/loadingSpinner";
import SearchError from "components/search/searchError";
import useGetClanInfo from "hooks/useGetClanInfo";

function ClanSearchResult() {
  const router = useRouter();

  const tag = decodeURIComponent(router.asPath.split("/")[2]);

  const { data, isLoading, isError, error } = useGetClanInfo({ tag });

  if (isLoading) {
    return <LoadingSpinner background />;
  }

  if (!data || isError) {
    const message = error?.response?.data.message
      ? error?.response?.data.message
      : "문제가 발생했습니다.";

    return <SearchError background message={message} />;
  }

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <ClanInfoCard
        imgUrl={data.result.badgeUrls.small}
        name={data.result.name}
        tag={data.result.tag}
        type={data.result.type}
        clanLevel={data.result.clanLevel}
        countryName={data.result.location?.name}
        description={data.result.description}
      />
      <ClanInfoCard
        clanPoints={data.result.clanPoints}
        clanVersusPoints={data.result.clanVersusPoints}
      />
      <ClanInfoCard
        warFrequency={data.result.warFrequency}
        warWinStreak={data.result.warWinStreak}
        warWins={data.result.warWins}
        warTies={data.result.warTies}
        warLosses={data.result.warLosses}
        warLeague={data.result.warLeague}
        isWarLogPublic={data.result.isWarLogPublic}
      />
      <ClanMemberList
        memberList={data.result.memberList}
        members={data.result.members}
      />
    </section>
  );
}

export default ClanSearchResult;
