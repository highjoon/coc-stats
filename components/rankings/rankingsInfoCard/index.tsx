import React from "react";
import { useRouter } from "next/dist/client/router";
import DataCard from "components/common/dataCard";
import { IRankingsResult } from "types/rankings";

interface IRankingsInfoCardProps {
  rankingsData: IRankingsResult;
}

function RankingsInfoCard({ rankingsData }: IRankingsInfoCardProps) {
  const router = useRouter();
  const category = router.asPath.split("/")[2].split("-")[0];

  const onClick = () => {
    router.push(
      `/${category === "clans" ? "clan" : "player"}/${encodeURIComponent(
        rankingsData.tag,
      )}`,
    );
  };

  return (
    <DataCard
      key={rankingsData.tag}
      tag={rankingsData.tag}
      name={rankingsData.name}
      rank={rankingsData.rank}
      imgUrl={rankingsData.imgUrl}
      points={rankingsData.trophies}
      level={rankingsData.level}
      onClickHandler={onClick}
    />
  );
}

export default RankingsInfoCard;
