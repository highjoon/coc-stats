import React from "react";

import ClanInfoCard from "components/clanInfoCard";

import { mockClanDetailData } from "utils/mockData";

import { flexColumnCenter } from "styles/globalStyles";

function ClanSearchResult() {
  return (
    <section>
      <div
        className={`${flexColumnCenter} items-center p-4 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
      >
        <ClanInfoCard
          imgUrl={mockClanDetailData.badgeUrls.small}
          name={mockClanDetailData.name}
          tag={mockClanDetailData.tag}
          type={mockClanDetailData.type}
          clanLevel={mockClanDetailData.clanLevel}
          countryName={mockClanDetailData.location?.name}
          description={mockClanDetailData.description}
        />
      </div>
    </section>
  );
}

export default ClanSearchResult;
