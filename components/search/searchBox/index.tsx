import React, { useCallback, useState } from "react";
import SearchForm from "../searchForm";
import SearchTab from "../searchTab";

function SearchBox() {
  const [isPlayersActive, setIsPlayersActive] = useState<boolean>(true);
  const [isClansActive, setIsClansActive] = useState<boolean>(false);

  const toggleIsPlayersActive = useCallback(() => {
    setIsPlayersActive(true);
    setIsClansActive(false);
  }, [setIsClansActive, setIsPlayersActive]);

  const toggleIsClansActive = useCallback(() => {
    setIsClansActive(true);
    setIsPlayersActive(false);
  }, [setIsClansActive, setIsPlayersActive]);

  return (
    <div className="w-full max-w-2xl m-auto my-0 border-2 rounded-md shadow-2xl border-default">
      <SearchTab
        isPlayersActive={isPlayersActive}
        isClansActive={isClansActive}
        toggleIsPlayersActive={toggleIsPlayersActive}
        toggleIsClansActive={toggleIsClansActive}
      />
      <SearchForm
        isPlayersActive={isPlayersActive}
        isClansActive={isClansActive}
      />
    </div>
  );
}

export default SearchBox;
