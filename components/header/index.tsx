import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const moveToHome = () => {
    router.push("/");
  };

  const moveToRankings = () => {
    router.push({
      pathname: "/rankings/32000216",
      query: { type: "players" },
    });
  };

  return (
    <header className="fixed top-0 z-20 flex items-center justify-between w-full p-3 h-15 bg-header md:p-2">
      <Image
        src="/assets/images/logo/headerLogo.webp"
        width={130}
        height={40}
        style={{ cursor: "pointer" }}
        onClick={moveToHome}
      />
      <nav>
        <ul>
          <li
            role="presentation"
            className="text-2xl font-semibold text-white cursor-pointer md:text-xl"
            onClick={moveToRankings}
          >
            랭킹
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
