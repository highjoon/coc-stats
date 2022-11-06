import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useInput from "hooks/useInput";
import { ISearchFormProps } from "./types";

function SearchForm({ isPlayersActive, isClansActive }: ISearchFormProps) {
  const [newInput, onChangenewInput] = useInput<string>("");
  const [category, setCategory] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    setCategory(isPlayersActive ? "player" : "clan");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClansActive, isPlayersActive]);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!newInput.length) return;
    router.push({
      pathname: `${category}/${encodeURIComponent(newInput)}`,
      query: category === "clan" ? { type: "basic" } : {},
    });
  };

  return (
    <form
      className="flex flex-col"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <input
        type="text"
        id="search-input"
        className="w-full h-12 px-5 text-center focus:outline-none bg-slate-100 placeholder:text-default"
        placeholder={`${isPlayersActive ? "플레이어 검색" : "클랜 검색"}`}
        value={newInput}
        onChange={onChangenewInput}
      />
      <button
        type="button"
        className={`flex items-center justify-center w-full text-xl font-bold text-white h-7 p-7 ${
          !newInput.length ? "pointer-events-none bg-default" : "bg-header"
        }`}
        onClick={onSubmitHandler}
      >
        검색하기
      </button>
    </form>
  );
}

export default SearchForm;
