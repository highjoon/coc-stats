import React from "react";

import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between w-full h-80 py-1 px-3.5 bg-layout text-white">
      <Link href="/">
        <Image
          src="/assets/images/headerLogo.webp"
          width={140}
          height={40}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </header>
  );
}

export default Header;
