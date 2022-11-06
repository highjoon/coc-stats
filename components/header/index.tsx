/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { flexBetweenCenter } from "styles/globalStyles";

function Header() {
  return (
    <header
      className={`${flexBetweenCenter} w-full h-15 p-3 bg-header fixed z-10 top-0 md:p-2`}
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
      <nav>
        <ul>
          <Link href="/rank">
            <li className="text-2xl font-semibold text-white cursor-pointer md:text-xl">
              랭킹
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
