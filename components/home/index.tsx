import React from "react";
import Image from "next/image";
import SearchBox from "components/search/searchBox";

function HomeView() {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-10 py-20 m-auto">
      <Image
        src="/assets/images/logo/titleLogo.webp"
        alt="title-logo"
        width={700}
        height={300}
      />
      <SearchBox />
    </main>
  );
}

export default HomeView;
