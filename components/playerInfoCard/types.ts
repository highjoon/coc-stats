import { APILabel } from "types/api";

export interface IPlayerInfoCardProps {
  title?: string;
  level?: number;
  tag?: string;
  imgUrl?: string;
  clanRole?: string;
  warPreference?: string;
  infoList?: Array<{ title: string; content: string }>;
  labels?: APILabel[];
  warStars?: number;
  trophies?: number;
  bestTrophies?: number;
  attackWins?: number;
  defenseWins?: number;
  donations?: number;
  donationsReceived?: number;
  clanCapitalContributions?: number;
  versusTrophies?: number;
  bestVersusTrophies?: number;
  versusBattleWins?: number;
}
