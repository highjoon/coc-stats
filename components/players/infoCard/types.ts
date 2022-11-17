import { APILabel } from "types/api";

export interface IProps {
  title?: string;
  level?: number;
  tag?: string;
  imgUrl?: string;
  clanRole?: string;
  warPreference?: string;
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
