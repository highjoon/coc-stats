/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20 p-3 bg-header">
      <Link href="/">
        <a>
          <Image
            src="/assets/images/logo/headerLogo.webp"
            width={140}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </a>
      </Link>
    </header>
  );
}

export default Header;
