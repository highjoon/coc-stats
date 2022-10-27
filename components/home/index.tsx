import React from "react";
import Image from "next/image";

import SearchBox from "components/search/searchBox";

function HomeView() {
  return (
    <main className="flex flex-col items-center w-full h-full max-w-5xl gap-10 bg-zinc-900">
      <Image
        src="/assets/images/logo/titleLogo4.webp"
        alt="Title Logo"
        width={500}
        height={200}
      />
      <SearchBox />
    </main>
  );
}

export default HomeView;
