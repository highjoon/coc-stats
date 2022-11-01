/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";

import Image from "next/image";

import ResultInfoCard from "components/common/resultInfoCard";

import { flexCenter, flexColumn, flexColumnCenter } from "styles/globalStyles";

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
  { title: "장인 기지 트로피", content: "4936" },
  { title: "장인 기지 트로피 최고 기록", content: "4963" },
  { title: "장인 기지 공격 승리", content: "1834" },
];

const mockLabelData: Array<{
  id: number;
  name: string;
  iconUrls: { small: string; medium: string };
}> = [
  {
    id: 57000000,
    name: "Clan Wars",
    iconUrls: {
      small:
        "https://api-assets.clashofclans.com/labels/64/ZxJp9606Vl1sa0GHg5JmGp8TdHS4l0jE4WFuil1ENvA.png",
      medium:
        "https://api-assets.clashofclans.com/labels/128/ZxJp9606Vl1sa0GHg5JmGp8TdHS4l0jE4WFuil1ENvA.png",
    },
  },
  {
    id: 57000001,
    name: "Clan War League",
    iconUrls: {
      small:
        "https://api-assets.clashofclans.com/labels/64/JOzAO4r91eVaJELAPB-iuAx6f_zBbRPCLM_ag5mpK4s.png",
      medium:
        "https://api-assets.clashofclans.com/labels/128/JOzAO4r91eVaJELAPB-iuAx6f_zBbRPCLM_ag5mpK4s.png",
    },
  },
  {
    id: 57000008,
    name: "Active Donator",
    iconUrls: {
      small:
        "https://api-assets.clashofclans.com/labels/64/MvL0LDt0yv9AI-Vevpu8yE5NAJUIV05Ofpsr4IfGRxQ.png",
      medium:
        "https://api-assets.clashofclans.com/labels/128/MvL0LDt0yv9AI-Vevpu8yE5NAJUIV05Ofpsr4IfGRxQ.png",
    },
  },
];

const mockHomeTroopsData: Array<{
  name: string;
  level: number;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}> = [
  {
    name: "Barbarian",
    level: 8,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Archer",
    level: 10,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Goblin",
    level: 8,
    maxLevel: 8,
    village: "home",
  },
  {
    name: "Giant",
    level: 9,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Wall Breaker",
    level: 7,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Balloon",
    level: 10,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Wizard",
    level: 9,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Healer",
    level: 6,
    maxLevel: 7,
    village: "home",
  },
  {
    name: "Dragon",
    level: 8,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "P.E.K.K.A",
    level: 7,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "Minion",
    level: 8,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Hog Rider",
    level: 10,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Valkyrie",
    level: 7,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "Golem",
    level: 7,
    maxLevel: 12,
    village: "home",
  },
  {
    name: "Witch",
    level: 5,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Lava Hound",
    level: 6,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Bowler",
    level: 6,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Baby Dragon",
    level: 6,
    maxLevel: 8,
    village: "home",
  },
  {
    name: "Miner",
    level: 7,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "Yeti",
    level: 4,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Ice Golem",
    level: 5,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Electro Dragon",
    level: 5,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Dragon Rider",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Headhunter",
    level: 2,
    maxLevel: 3,
    village: "home",
  },
];

const mockBuilderTroopsData: Array<{
  name: string;
  level: number;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}> = [
  {
    name: "Raged Barbarian",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Sneaky Archer",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Beta Minion",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Boxer Giant",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Bomber",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Super P.E.K.K.A",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Cannon Cart",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Drop Ship",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Baby Dragon",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Night Witch",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Hog Glider",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
];

const mockPetsData: Array<{
  name: string;
  level: number;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}> = [
  {
    name: "L.A.S.S.I",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Mighty Yak",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Electro Owl",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Unicorn",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
];

const mockSuperUnitsData: Array<{
  name: string;
  level: number;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}> = [
  {
    name: "Ice Hound",
    level: 1,
    maxLevel: 2,
    village: "home",
  },
  {
    name: "Super Barbarian",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Super Archer",
    level: 1,
    maxLevel: 4,
    village: "home",
    superTroopIsActive: true,
  },
  {
    name: "Super Wall Breaker",
    level: 1,
    maxLevel: 5,
    village: "home",
  },
  {
    name: "Super Giant",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Sneaky Goblin",
    level: 1,
    maxLevel: 2,
    village: "home",
  },
  {
    name: "Rocket Balloon",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Witch",
    level: 1,
    maxLevel: 2,
    village: "home",
  },
  {
    name: "Super Valkyrie",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Bowler",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Dragon",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Wizard",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Minion",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Inferno Dragon",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
];

const mockSiegeUnitsData: Array<{
  name: string;
  level: number;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}> = [
  {
    name: "Siege Barracks",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Log Launcher",
    level: 4,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Stone Slammer",
    level: 2,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Wall Wrecker",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Battle Blimp",
    level: 3,
    maxLevel: 4,
    village: "home",
  },
];

function SearchResult() {
  return (
    <section className={`${flexColumnCenter} pt-5`}>
      <div
        className={`${flexColumnCenter} items-center p-4 space-y-4 bg-default overflow-scroll max-w-5xl w-full`}
      >
        <ResultInfoCard
          title="Ramos"
          level="183"
          tag="#29LVR2YUV"
          imgUrl="https://api-assets.clashofclans.com/leagues/72/qVCZmeYH0lS7Gaa6YoB7LrNly7bfw7fV_d4Vp2CU-gk.png"
          infoList={mockHomeData}
          labels={mockLabelData}
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
        <ResultInfoCard
          level="9"
          imgUrl="/assets/images/townHalls/th13-5.webp"
          infoList={mockBuilderData}
        />
        <div className="grid w-full grid-cols-8 gap-6 p-2 bg-white rounded-lg place-items-center">
          {mockHomeTroopsData.map((troop, index) => (
            <div
              key={`${troop.name}-${String(index)}`}
              className={`${flexColumnCenter}`}
            >
              <Image
                src={`/assets/images/troops/${troop.village}/${troop.name
                  .replaceAll(".", "")
                  .split(" ")
                  .join("")}.webp`}
                width={55}
                height={55}
              />
              <div>
                {troop.level} / {troop.maxLevel}
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-8 gap-6 p-2 bg-white rounded-lg place-items-center">
          {mockSuperUnitsData.map((troop, index) => (
            <div
              key={`${troop.name}-${String(index)}`}
              className={`${flexColumnCenter}`}
            >
              <Image
                src={`/assets/images/troops/${troop.village}/${troop.name
                  .replaceAll(".", "")
                  .split(" ")
                  .join("")}.webp`}
                width={55}
                height={55}
              />
              <div>
                {troop.level} / {troop.maxLevel}
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-8 gap-6 p-2 bg-white rounded-lg place-items-center">
          {mockSiegeUnitsData.map((troop, index) => (
            <div
              key={`${troop.name}-${String(index)}`}
              className={`${flexColumnCenter}`}
            >
              <Image
                src={`/assets/images/troops/${troop.village}/${troop.name
                  .replaceAll(".", "")
                  .split(" ")
                  .join("")}.webp`}
                width={55}
                height={55}
              />
              <div>
                {troop.level} / {troop.maxLevel}
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-8 gap-6 p-2 bg-white rounded-lg place-items-center">
          {mockPetsData.map((troop, index) => (
            <div
              key={`${troop.name}-${String(index)}`}
              className={`${flexColumnCenter}`}
            >
              <Image
                src={`/assets/images/troops/${troop.village}/${troop.name
                  .replaceAll(".", "")
                  .split(" ")
                  .join("")}.webp`}
                width={55}
                height={55}
              />
              <div>
                {troop.level} / {troop.maxLevel}
              </div>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-8 gap-6 p-2 bg-white rounded-lg place-items-center">
          {mockBuilderTroopsData.map((troop, index) => (
            <div
              key={`${troop.name}-${String(index)}`}
              className={`${flexColumnCenter}`}
            >
              <Image
                src={`/assets/images/troops/${troop.village}/${troop.name
                  .replaceAll(".", "")
                  .split(" ")
                  .join("")}.webp`}
                width={55}
                height={55}
              />
              <div>
                {troop.level} / {troop.maxLevel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
