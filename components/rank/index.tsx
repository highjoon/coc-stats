import React, { useState } from "react";
import { useRouter } from "next/router";
import DataCard from "components/common/dataCard";
import RankType from "components/rank/rankType";
import { mockClansRankData } from "utils/mockData";

function RankView() {
  const router = useRouter();

  const [openCountryList, setOpenCountryList] = useState<boolean>(false);
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const movoToClanDetail = (tag: string) => {
    router.push({
      pathname: `/clan/${encodeURIComponent(tag)}`,
      query: { type: "basic" },
    });
  };

  return (
    <section className="flex flex-col items-center justify-center w-full pt-5">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4 space-y-4 overflow-scroll bg-default">
        <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg">
          <RankType
            openCountryList={openCountryList}
            openCategoryList={openCategoryList}
            setOpenCountryList={setOpenCountryList}
            setOpenCategoryList={setOpenCategoryList}
            setCountry={setCountry}
            setCategory={setCategory}
          />
          {mockClansRankData.items.map((data) => (
            <DataCard
              key={data.tag}
              tag={data.tag}
              rank={data.rank}
              imgUrl={data.badgeUrls.small}
              name={data.name}
              level={data.clanLevel}
              members={data.members}
              points={data.clanPoints}
              onClickHandler={movoToClanDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RankView;
