import React from "react";
import Image from "next/image";

import SearchBox from "components/search/searchBox";

function HomeView() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-4 bg-center bg-no-repeat bg-cover h-[400px] py-9 bg-homeBackground sm:h-[550px] sm:gap-9">
      <Image
        src="/assets/images/logo/titleLogo.webp"
        alt="Title Logo"
        width={950}
        height={300}
      />
      <SearchBox />
    </div>
  );
}

export default HomeView;
