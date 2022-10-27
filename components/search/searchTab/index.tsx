import React, { MouseEventHandler } from "react";

interface IProps {
  isPlayersActive: boolean;
  isClansActive: boolean;
  toggleIsPlayersActive: MouseEventHandler<HTMLButtonElement>;
  toggleIsClansActive: MouseEventHandler<HTMLButtonElement>;
}

const buttonStyle = (isActive: boolean) => {
  return `w-1/2 h-full ${
    isActive ? "bg-default" : "text-white"
  } font-bold transition duration-300 ease focus:outline-none`;
};

function SearchTab({
  isPlayersActive,
  isClansActive,
  toggleIsPlayersActive,
  toggleIsClansActive,
}: IProps) {
  return (
    <div className="w-full h-12 text-sm sm:text-lg">
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
