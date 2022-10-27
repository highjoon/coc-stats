/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const buttonConfig = {
  activated:
    "flex justify-center items-center w-full py-3 gap-2 bg-gray-600 shadow-md shadow-black text-gray-50 font-bold pointer-events-none",
  inactivated:
    "flex justify-center items-center w-full py-3 gap-2 bg-gray-50 shadow-md shadow-black text-layout font-bold hover:bg-gray-300",
};

function PlayersPage() {
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
    <div className="flex items-center justify-center w-full h-[550px] px-3 py-9 bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col items-center h-full p-4 space-y-4 w-[960px] bg-layout/90">
        <div className="flex w-full gap-3 text-lg">
          <button
            type="button"
            className={
              hall === "home"
                ? buttonConfig.activated
                : buttonConfig.inactivated
            }
            onClick={() => onTabClickHandler("home")}
          >
            마을회관
          </button>
          <button
            type="button"
            className={
              hall === "builder"
                ? buttonConfig.activated
                : buttonConfig.inactivated
            }
            onClick={() => onTabClickHandler("builder")}
          >
            장인기지
          </button>
        </div>
        <div className="flex flex-col w-full h-full p-2 bg-gray-300">
          <div className="flex justify-center flex-1 w-full bg-red-300">
            <div className="flex flex-col justify-center">
              <div className="text-lg font-bold">LV. 183</div>
              <div className="text-2xl font-extrabold">RAMOS</div>
              <div>#12341234</div>
            </div>
            <div className="flex items-center justify-center flex-1 w-full space-x-4 bg-green-400">
              <div>획득한 별</div>
              <div>트로피</div>
              <div>트로피 최고 기록</div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1 w-full bg-yellow-200">
            <div className="flex flex-col flex-1">
              <div>The Ring</div>
              <div>
                <Image
                  src="https://api-assets.clashofclans.com/badges/70/cQ-Ho3wkwUCC5eYKjHrCzkMq7XxyfTfUQNxOoL3bOVA.png"
                  width={50}
                  height={50}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div>
                <div>clanLevel</div>
                <div>coLeader</div>
                <div>warPreference In</div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div>donations</div>
              <div>donationsReceived</div>
              <div>clanCapitalContributions</div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-1 w-full space-x-4 bg-gray-400">
            <div>attackWins</div>
            <div>defenseWins</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayersPage;
