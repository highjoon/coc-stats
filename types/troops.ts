import { APIPlayerItem } from "./api";

export interface ITroopsResponse {
  home: Array<APIPlayerItem>;
  pets: Array<APIPlayerItem>;
  siegeMachines: Array<APIPlayerItem>;
  superTroops: Array<APIPlayerItem>;
  builderBase: Array<APIPlayerItem>;
}
