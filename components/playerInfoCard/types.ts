import { APILabel } from "types/api";

export interface IPlayerInfoCardProps {
  title?: string;
  level?: string;
  tag?: string;
  imgUrl?: string;
  clanRole?: string;
  warPreference?: string;
  infoList?: Array<{ title: string; content: string }>;
  labels?: APILabel[];
}
