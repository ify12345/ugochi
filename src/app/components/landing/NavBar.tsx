import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-9">
      <Image src="/img/logo.png" width={200} height={10} alt="ugochi" />

      <div className="flex items-center text-[16px] font-medium gap-5">
        <Link
          href="/about"
          className="hover:scale-105 transition-all duration-300"
        >
          About
        </Link>
        <Link
          href="/pricing"
          className="hover:scale-105 transition-all duration-300"
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="hover:scale-105 transition-all duration-300"
        >
          Why Ugochi and Ugochi?
        </Link>
        <Link
          href="/contact"
          className="hover:scale-105 transition-all duration-300"
        >
          Contact
        </Link>
      </div>
      <Link
        className="p-4 hover:bg-[#4d4d4c] transition-all duration-150 text-white bg-[#25241E] rounded-tl-3xl rounded-br-3xl"
        href="/"
      >
        Request a document
      </Link>
    </nav>
  );
}
