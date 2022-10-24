/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useInput from "hooks/useInput";

interface IProps {
  isPlayersActive: boolean;
  isClansActive: boolean;
}

function SearchForm({ isPlayersActive, isClansActive }: IProps) {
  const [newInput, onChangenewInput, setnewInput] = useInput<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    setnewInput("");
  }, [isPlayersActive, isClansActive, setnewInput]);

  useEffect(() => {
    if (!newInput) return;
    let newCategory = "";
    if (isPlayersActive) newCategory = "players";
    if (isClansActive) newCategory = "clans";
    setCategory(newCategory);
  }, [isClansActive, isPlayersActive, newInput]);

  return (
    <div className="flex flex-col px-6 py-2 space-y-2 text-sm shadow-2xl sm:text-lg">
      <input
        type="text"
        id="search-input"
        className="w-full h-12 px-5 duration-500 ease-in-out border-0 rounded-md placeholder:text-white bg-input focus:bg-white focus:outline-none"
        placeholder={`${isPlayersActive ? "플레이어 검색" : "클랜 검색"}`}
        value={newInput}
        onChange={onChangenewInput}
      />
      <Link href={`${category}/${encodeURIComponent(newInput)}`} passHref>
        <a
          className={`${
            newInput.length
              ? "active bg-gray-400 hover:bg-gray-100"
              : "pointer-events-none cursor-not-allowed bg-layout"
          } w-full h-7 text-center duration-200 rounded-md text-lg`}
        >
          Search
        </a>
      </Link>
    </div>
  );
}

export default SearchForm;
