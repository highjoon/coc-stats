import React, { useState } from "react";
import { useRouter } from "next/router";
import DataCard from "components/common/dataCard";
import { mockClansRankData } from "utils/mockData";
import { flexBetweenCenter, flexColumnCenter } from "styles/globalStyles";

function RankView() {
  const router = useRouter();

  const [openCountryList, setOpenCountryList] = useState<boolean>(false);
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);

  const toggleCountryList = () => {
    setOpenCountryList((prev) => !prev);
  };

  const toggleCategoryList = () => {
    setOpenCategoryList((prev) => !prev);
  };

  const movoToClanDetail = (tag: string) => {
    router.push({
      pathname: `/clan/${tag}`,
      query: { type: "basic" },
    });
  };

  return (
    <section className={`${flexColumnCenter} pt-5 w-full`}>
      <div
        className={`${flexColumnCenter} p-4 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
      >
        <div
          className={`${flexColumnCenter} gap-2 bg-white rounded-lg w-full py-2 px-4`}
        >
          <div className={`${flexBetweenCenter} gap-3 w-full mb-6`}>
            <div
              role="presentation"
              className="relative w-full p-3 text-center text-white rounded-md cursor-pointer bg-layout"
              onClick={toggleCountryList}
            >
              국가
              {openCountryList && (
                <div className="absolute left-0 z-10 w-full bg-red-500 top-14">
                  국가 리스트
                </div>
              )}
            </div>
            <div
              role="presentation"
              className="relative w-full p-3 text-center text-white rounded-md cursor-pointer bg-layout"
              onClick={toggleCategoryList}
            >
              분류
              {openCategoryList && (
                <div className="absolute left-0 z-10 w-full bg-red-500 top-14">
                  분류 리스트
                </div>
              )}
            </div>
          </div>
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
