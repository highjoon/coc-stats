import React from "react";
import RankingsInfoCard from "components/rankings/rankingsInfoCard";
import { IRankingsResult } from "types/rankings";

interface IRankingsListProps {
  countryName: string;
  rankingsData?: Array<IRankingsResult>;
}

function RankingsList({ countryName, rankingsData }: IRankingsListProps) {
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
