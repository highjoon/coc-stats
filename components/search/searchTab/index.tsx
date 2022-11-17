import React, { useCallback } from "react";
import buttonStyle from "./styles";
import { IProps } from "./types";

function SearchTab({
  isPlayersActive,
  isClansActive,
  setIsPlayersActive,
  setIsClansActive,
}: IProps) {
  const toggleIsPlayersActive = useCallback(() => {
    setIsPlayersActive(true);
    setIsClansActive(false);
  }, [setIsClansActive, setIsPlayersActive]);

  const toggleIsClansActive = useCallback(() => {
    setIsClansActive(true);
    setIsPlayersActive(false);
  }, [setIsClansActive, setIsPlayersActive]);

  return (
    <div className="w-full h-12 text-lg md:h-11 md:text-md">
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
