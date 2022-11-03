import React from "react";
import Image from "next/image";

import SearchBox from "components/search/searchBox";
import { flexColumnCenter } from "styles/globalStyles";

function HomeView() {
  return (
    <main className={`${flexColumnCenter} w-full m-auto mt-10 gap-10`}>
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
