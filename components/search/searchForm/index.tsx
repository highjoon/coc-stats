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
    setCategory(isPlayersActive ? "players" : "clans");
  }, [isClansActive, isPlayersActive, newInput]);

  return (
    <form
      className="flex flex-col space-y-2 text-sm shadow-2xl sm:text-lg"
      autoComplete="off"
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <input
        type="text"
        id="search-input"
        className="w-full h-12 px-5 text-center placeholder:text-black focus:outline-none"
        placeholder={`${isPlayersActive ? "플레이어 검색" : "클랜 검색"}`}
        value={newInput}
        onChange={onChangenewInput}
      />
      <Link
        href={`${category}/${encodeURIComponent(newInput)}?hall=home`}
        passHref
      >
        <a className="flex items-center justify-center w-full p-5 text-lg font-bold text-layout h-7 bg-default">
          검색하기
        </a>
      </Link>
    </form>
  );
}

export default SearchForm;
