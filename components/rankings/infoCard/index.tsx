import React from "react";
import { useRouter } from "next/dist/client/router";
import DataCard from "components/common/dataCard";
import { IProps } from "./types";

function RankingsInfoCard({ rankingsData }: IProps) {
  const router = useRouter();
  const category = router.asPath.split("/")[2].split("-")[0];

  const moveToDetail = () => {
    router.push(`/${category}/${encodeURIComponent(rankingsData.tag)}`);
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
      onClickHandler={moveToDetail}
    />
  );
}

export default RankingsInfoCard;
