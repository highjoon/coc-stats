import React from "react";
import { useRouter } from "next/dist/client/router";
import { IProps } from "./types";

function RankingsSearchForm({ categoryCode, countryCode }: IProps) {
  const router = useRouter();

  const onClickSearchRank = () => {
    router.push(`/rankings/${categoryCode}/${countryCode}`);
  };

  return (
    <div className="flex items-center justify-center w-full px-10 pb-4 border-b-2 md:px-6 border-b-default">
      <div
        role="presentation"
        className="p-3 text-center text-white rounded-md cursor-pointer w-80 bg-header/70 hover:bg-header md:w-full"
        onClick={onClickSearchRank}
      >
        검색
      </div>
    </div>
  );
}

export default RankingsSearchForm;
