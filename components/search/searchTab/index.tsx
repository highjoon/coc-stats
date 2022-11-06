import React from "react";
import buttonStyle from "./styles";
import { ISearchTabProps } from "./types";

function SearchTab({
  isPlayersActive,
  isClansActive,
  toggleIsPlayersActive,
  toggleIsClansActive,
}: ISearchTabProps) {
  return (
    <div className="w-full h-12 text-lg">
      <button
        type="button"
        className={`${buttonStyle(isPlayersActive)}`}
        onClick={toggleIsPlayersActive}
      >
        플레이어
      </button>
      <button
        type="button"
        className={`${buttonStyle(isClansActive)}`}
        onClick={toggleIsClansActive}
      >
        클랜
      </button>
    </div>
  );
}

export default SearchTab;
