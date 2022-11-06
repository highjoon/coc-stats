import React, { useState } from "react";
import { useRouter } from "next/router";
import DataCard from "components/common/dataCard";
import RankType from "components/rank/rankType";
import { mockClansRankData } from "utils/mockData";
import { flexColumnCenter } from "styles/globalStyles";

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
    <section className={`${flexColumnCenter} pt-5 w-full`}>
      <div
        className={`${flexColumnCenter} p-4 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
      >
        <div className={`${flexColumnCenter} bg-white rounded-lg w-full`}>
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
