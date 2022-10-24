import React, { MouseEventHandler } from "react";

interface IProps {
  isPlayersActive: boolean;
  isClansActive: boolean;
  toggleIsPlayersActive: MouseEventHandler<HTMLButtonElement>;
  toggleIsClansActive: MouseEventHandler<HTMLButtonElement>;
}

const buttonStyle = (isActive: boolean) => {
  return `w-1/2 h-full rounded-tl-md ${
    isActive ? "bg-white" : "hover:bg-lightgray2 hover:text-white"
  } font-bold transition duration-200 ease focus:outline-none`;
};

function SearchTab({
  isPlayersActive,
  isClansActive,
  toggleIsPlayersActive,
  toggleIsClansActive,
}: IProps) {
  return (
    <div className="flex items-center justify-center w-full h-12 text-sm sm:text-lg">
      <button
        type="button"
        className={buttonStyle(isPlayersActive)}
        onClick={toggleIsPlayersActive}
      >
        Players
      </button>
      <button
        type="button"
        className={buttonStyle(isClansActive)}
        onClick={toggleIsClansActive}
      >
        Clans
      </button>
    </div>
  );
}

export default SearchTab;
