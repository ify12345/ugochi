"use client";
import React, { useState } from "react";
import Text from "../Text";
import Button from "../Button";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export const Footer = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <div className="pt-[50px] w-full lg:px-10 space-y-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <Text variant="primary" size="lg" className=" capitalize">
          WANT A LAWYER?
        </Text>
        <div className="flex items-center lg:gap-8">
          <Button variant="primary" className="block p-4">
            <a href="mailto:ugochi@gmail.com">CONTACT US</a>
          </Button>
          <div className="flex mt-5">
            <HiArrowLongRight size={78} />
          </div>
          <Text variant="primary" size="lg" className=" capitalize">
            LET US TALK
          </Text>
        </div>
        <a href="mailto:ugochi@gmail.com">
          <Text variant="primary" size="lg" className="lg:ml-[500px]">
            Ugochi@gmail.com
          </Text>
        </a>
      </div>

      <div className="border-t border-[#eed7e9] py-4 flex justify-between items-center px-4">
        <Text variant="primary" size="sm" className="capitalize font-extrabold">
          Ugochi & Ugochi
        </Text>

        <div className="hidden lg:flex items-center text-[16px] font-medium gap-5">
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300"
          >
            Home
            
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
            <a className="border-l border-black px-3" href="sms:+2348035133047">
              (+234) 803 513 3047
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Text variant="primary" size="sm" className="capitalize text-start">
            Copyright 2017 © Ugochi & Ugochi.
          </Text>
          <Text variant="primary" size="sm" className="capitalize text-start">
            All rights reserved. ProvenCredible.com
          </Text>
        </div>
      </div>
    </div>
  );
};
