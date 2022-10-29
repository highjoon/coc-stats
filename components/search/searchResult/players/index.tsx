/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback } from "react";

import { useRouter } from "next/router";

import ResultInfoCard from "components/common/resultInfoCard";

import { flexCenter, flexColumn, flexColumnFull } from "styles/globalStyles";

const mockHomeData: Array<{ title: string; content: string }> = [
  { title: "획득한 별", content: "365" },
  { title: "트로피", content: "3950" },
  { title: "트로피 최고 기록", content: "4000" },
  { title: "공격 승리", content: "300" },
  { title: "방어 승리", content: "100" },
];

const mockClanData: Array<{ title: string; content: string }> = [
  { title: "지원한 병력 수", content: "1500" },
  { title: "지원 받은 병력 수", content: "1000" },
  { title: "클랜 캐피탈 기여", content: "15000" },
];

const mockBuilderData: Array<{ title: string; content: string }> = [
  { title: "트로피", content: "4936" },
  { title: "트로피 최고 기록", content: "4963" },
  { title: "공격 승리", content: "1834" },
];

function SearchResult() {
  const router = useRouter();
  const { hall, id } = router.query;

  const onTabClickHandler = useCallback(
    (param: string) => {
      if (typeof id !== "string") return;
      router.push(`${encodeURIComponent(id)}/?hall=${param}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  return (
    <section className={`${flexColumn} pt-5 items-center`}>
      <div className={`${flexColumn} items-center p-4 space-y-4 bg-default`}>
        <div className="flex w-full gap-3 text-lg">
          <button
            type="button"
            className={`${flexCenter} w-full py-3 gap-2 shadow-md shadow-black text-white font-bold rounded-lg ${
              hall === "home"
                ? "bg-header pointer-events-none"
                : "bg-layout hover:bg-layout/60 text-neutral-500"
            }`}
            onClick={() => onTabClickHandler("home")}
          >
            마을회관
          </button>
          <button
            type="button"
            className={`${flexCenter} w-full py-3 gap-2 shadow-md shadow-black text-white font-bold rounded-lg ${
              hall === "builder"
                ? "bg-header pointer-events-none"
                : "bg-layout hover:bg-layout/60 text-neutral-500"
            }`}
            onClick={() => onTabClickHandler("builder")}
          >
            장인기지
          </button>
        </div>
        <div className={`${flexColumnFull} space-y-3 overflow-scroll`}>
          {hall === "home" && (
            <>
              <ResultInfoCard
                title="Ramos"
                level="183"
                tag="#29LVR2YUV"
                imgUrl="https://api-assets.clashofclans.com/leagues/72/qVCZmeYH0lS7Gaa6YoB7LrNly7bfw7fV_d4Vp2CU-gk.png"
                infoList={mockHomeData}
              />
              <ResultInfoCard
                title="The Ring"
                level="5"
                tag="#2QRUG0P9V"
                imgUrl="https://api-assets.clashofclans.com/badges/70/cQ-Ho3wkwUCC5eYKjHrCzkMq7XxyfTfUQNxOoL3bOVA.png"
                clanRole="coLeader"
                warPreference="in"
                infoList={mockClanData}
              />
            </>
          )}
          {hall === "builder" && (
            <ResultInfoCard
              level="9"
              imgUrl="/assets/images/townHalls/th13-5.webp"
              infoList={mockBuilderData}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
