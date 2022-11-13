import React, { useState } from "react";
import SearchForm from "../searchForm";
import SearchTab from "../searchTab";

function SearchBox() {
  const [isPlayersActive, setIsPlayersActive] = useState<boolean>(true);
  const [isClansActive, setIsClansActive] = useState<boolean>(false);

  return (
    <div className="w-full max-w-2xl m-auto my-0 border-2 rounded-md shadow-2xl border-default">
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
