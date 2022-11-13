import React from "react";
import RankingsInfoCard from "components/rankings/infoCard";
import { IProps } from "./types";

function RankingsList({ countryName, rankingsData }: IProps) {
  if (!rankingsData) {
    return <div className="h-screen" />;
  }

  return (
    <div className="flex flex-col justify-center w-full bg-white rounded-lg">
      <div className="flex items-center justify-center w-full text-lg font-bold border-b-2 border-b-default">
        {countryName}
      </div>
      {rankingsData &&
        rankingsData.map((data) => (
          <RankingsInfoCard key={data.tag} rankingsData={data} />
        ))}
    </div>
  );
}

export default RankingsList;
