import { APIPlayerItem } from "types/api";

export interface IProps {
  troops?: Array<APIPlayerItem>;
  category: string;
  title: string;
  spells?: Array<APIPlayerItem>;
}
