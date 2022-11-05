import { MouseEventHandler } from "react";

export interface ISearchTabProps {
  isPlayersActive: boolean;
  isClansActive: boolean;
  toggleIsPlayersActive: MouseEventHandler<HTMLButtonElement>;
  toggleIsClansActive: MouseEventHandler<HTMLButtonElement>;
}
