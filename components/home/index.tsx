import React from "react";
import Image from "next/image";
import SearchBox from "components/search/searchBox";

function HomeView() {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-10 m-auto mt-20">
      <Image
        src="/assets/images/logo/titleLogo.webp"
        alt="Title Logo"
        width={700}
        height={300}
      />
      <SearchBox />
    </main>
  );
}

export default HomeView;
