import React, { useState } from "react";
import SearchForm from "components/search/searchForm";
import SearchTab from "components/search/searchTab";

function SearchBox() {
  const [isPlayersActive, setIsPlayersActive] = useState<boolean>(true);
  const [isClansActive, setIsClansActive] = useState<boolean>(false);

  return (
    <div className="w-full max-w-2xl m-auto my-0 shadow-2xl md:max-w-sm">
      <SearchTab
        isPlayersActive={isPlayersActive}
        isClansActive={isClansActive}
        setIsPlayersActive={setIsPlayersActive}
        setIsClansActive={setIsClansActive}
      />
      <SearchForm
        isPlayersActive={isPlayersActive}
        isClansActive={isClansActive}
      />
    </div>
  );
}

export default SearchBox;
