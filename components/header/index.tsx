/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 z-20 flex items-center justify-between w-full p-3 h-15 bg-header md:p-2">
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
