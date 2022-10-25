/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FormEvent, useEffect, useState } from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlayersActive, isClansActive]);

  useEffect(() => {
    if (!newInput) return;
    let newCategory = "";
    if (isPlayersActive) newCategory = "players";
    if (isClansActive) newCategory = "clans";
    setCategory(newCategory);
  }, [isClansActive, isPlayersActive, newInput]);

  return (
    <form
      className="flex flex-col px-6 py-2 space-y-2 text-sm shadow-2xl sm:text-lg"
      autoComplete="off"
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <input
        type="text"
        id="search-input"
        className="w-full h-12 px-5 border-0 rounded-md placeholder:text-black bg-input focus:bg-white focus:outline-none"
        placeholder={`${isPlayersActive ? "플레이어 검색" : "클랜 검색"}`}
        value={newInput}
        onChange={onChangenewInput}
      />
      <Link
        href={`${category}/${encodeURIComponent(newInput)}?hall=home`}
        passHref
      >
        <a
          className={`w-full h-7 flex justify-center items-center rounded-md text-lg text-white font-bold ${
            newInput.length
              ? "active bg-gray-400 hover:bg-gray-100 hover:text-layout"
              : "pointer-events-none cursor-not-allowed bg-layout"
          }`}
        >
          Search
        </a>
      </Link>
    </form>
  );
}

export default SearchForm;
