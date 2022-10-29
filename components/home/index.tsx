import React from "react";
import Image from "next/image";

import SearchBox from "components/search/searchBox";

function HomeView() {
  return (
    <main className="w-full max-w-5xl m-auto my-0 text-center">
      <Image
        src="/assets/images/logo/titleLogo.webp"
        alt="Title Logo"
        width={700}
        height={200}
      />
      <SearchBox />
    </main>
  );
}

export default HomeView;
