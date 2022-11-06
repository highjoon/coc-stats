type ObjType = {
  [index: string]: string;
};

export const CLAN_ROLE: ObjType = {
  coLeader: "공동대표",
  member: "클랜원",
  leader: "대표",
  admin: "장로",
};

export const CLAN_WAR_STATE: ObjType = {
  clanNotFound: "존재하지 않는 클랜입니다.",
  accessDenied: "클랜이 공개를 원하지 않습니다.",
  notInWar: "클랜전을 진행 중이지 않습니다.",
  inMatchMaking: "클랜전 상대를 찾는 중 입니다.",
  enterWar: "클랜전을 진행 중 입니다.",
  matched: "클랜전 상대가 결정되었습니다.",
  preparation: "클랜전을 준비 중 입니다.",
  war: "클랜전을 진행 중 입니다.",
  inWar: "클랜전을 진행 중 입니다.",
  ended: "클랜전이 종료되었습니다.",
};

export default CLAN_ROLE;
