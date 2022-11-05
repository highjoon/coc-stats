import React from "react";
import PlayerInfoCard from "components/playerInfoCard";
import UnitCard from "components/common/unitCard";
import {
  mockBuilderData,
  mockBuilderTroopsData,
  mockClanData,
  mockHomeData,
  mockHomeTroopsData,
  mockLabelData,
  mockPetsData,
  mockSiegeUnitsData,
  mockSuperUnitsData,
} from "utils/mockData";
import { flexColumnCenter } from "styles/globalStyles";

function PlayerSearchResult() {
  return (
    <section className={`${flexColumnCenter} pt-5`}>
      <div
        className={`${flexColumnCenter} p-4 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
      >
        <PlayerInfoCard
          title="Ramos"
          level="183"
          tag="#29LVR2YUV"
          imgUrl="https://api-assets.clashofclans.com/leagues/72/qVCZmeYH0lS7Gaa6YoB7LrNly7bfw7fV_d4Vp2CU-gk.png"
          infoList={mockHomeData}
          labels={mockLabelData}
        />
        <PlayerInfoCard
          title="The Ring"
          level="5"
          tag="#2QRUG0P9V"
          imgUrl="https://api-assets.clashofclans.com/badges/70/cQ-Ho3wkwUCC5eYKjHrCzkMq7XxyfTfUQNxOoL3bOVA.png"
          clanRole="coLeader"
          warPreference="in"
          infoList={mockClanData}
        />
        <PlayerInfoCard
          level="9"
          imgUrl="/assets/images/townHalls/th13-5.webp"
          infoList={mockBuilderData}
        />
        <UnitCard troops={mockHomeTroopsData} />
        <UnitCard troops={mockSuperUnitsData} />
        <UnitCard troops={mockSiegeUnitsData} />
        <UnitCard troops={mockPetsData} />
        <UnitCard troops={mockBuilderTroopsData} />
      </div>
    </section>
  );
}

export default PlayerSearchResult;
