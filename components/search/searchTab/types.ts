import { Dispatch, SetStateAction } from "react";

export interface IProps {
  isPlayersActive: boolean;
  isClansActive: boolean;
  setIsPlayersActive: Dispatch<SetStateAction<boolean>>;
  setIsClansActive: Dispatch<SetStateAction<boolean>>;
}
