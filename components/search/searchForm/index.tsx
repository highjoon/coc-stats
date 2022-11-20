import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import useInput from "hooks/useInput";
import { IProps } from "./types";

function SearchForm({ isPlayersActive, isClansActive }: IProps) {
  const router = useRouter();

  const [category, setCategory] = useState<string>("");

  const [newInput, onChangenewInput] = useInput<string>("");

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!newInput.length) return;
    router.push(`/${category}/${encodeURIComponent(newInput)}`);
  };

  useEffect(() => {
    setCategory(isPlayersActive ? "players" : "clans");
  }, [isClansActive, isPlayersActive]);

  return (
    <form
      className="flex flex-col"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <input
        type="text"
        id="search-input"
        className="w-full h-12 px-5 text-center focus:outline-none bg-slate-100 placeholder:text-default md:h-10 md:text-sm"
        placeholder={`${isPlayersActive ? "플레이어 검색" : "클랜 검색"}`}
        value={newInput}
        onChange={onChangenewInput}
      />
      <button
        type="button"
        className={`flex items-center justify-center w-full text-xl font-bold text-white h-7 p-7 ${
          !newInput.length ? "pointer-events-none bg-default" : "bg-header"
        } md:text-sm md:p-6`}
        onClick={onSubmitHandler}
      >
        검색하기
      </button>
    </form>
  );
}

export default SearchForm;
