/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { flexBetween } from "styles/globalStyles";

function Header() {
  return (
    <header
      className={`${flexBetween} items-center w-full h-15 p-3 bg-header fixed z-10 top-0`}
    >
      <Link href="/">
        <a>
          <Image
            src="/assets/images/logo/headerLogo.webp"
            width={130}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </a>
      </Link>
    </header>
  );
}

export default Header;
