"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Button from "../Button";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center px-9 relative">
      <Link href="/">
        <Image src="/img/logo.png" width={130} height={10} alt="ugochi" />
      </Link>

      <button
        className="lg:hidden"
        onClick={toggleNav}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <IoClose size={32} /> : <RxHamburgerMenu size={32} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#F4EEE4] rounded-lg flex flex-col items-center gap-6 pt-10 z-50 lg:hidden">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="/about" className="hover:underline">
            Why Ugochi and Ugochi?
          </Link>
          <Link href="/request" className="hover:underline">
            Contact
          </Link>

          <Button variant="primary" className="block lg:hidden p-4">
            <Link href="/request" className="hover:underline">
              Request a document
            </Link>
          </Button>
        </div>
      )}

      <div className="hidden lg:flex items-center text-[16px] font-medium gap-5">
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
        {/* <Link
          href="/about"
          className="hover:scale-105 transition-all duration-300"
        >
          Why Ugochi and Ugochi?
        </Link> */}
        <div className="flex">
          <Link
            href="/request"
            className="hover:scale-105 transition-all duration-300 border-r border-black px-3"
          >
            Contact
          </Link>
          <a className="border-l border-black px-3" href="sms:+2348032816755">
            (+234) 803 281 6755
          </a>
        </div>
      </div>

      {/* <Link
        className="hidden lg:block p-4  rounded-tl-3xl rounded-br-3xl"
        href="/"
      >
        Request a document
      </Link> */}
      <Button
        variant="primary"
        className="hidden lg:block p-4  rounded-tl-3xl rounded-br-3xl"
      >
        <Link href="/request" className="">
          Request a document
        </Link>
      </Button>
    </nav>
  );
}
