import React from "react";
import Text from "@/app/components/Text";
import Link from "next/link";
import NavBar from "../components/landing/NavBar";
import Button from "../components/Button";

export default function Pricing() {
  return (
    <div className="bg-[#F4EEE4] h-full">
      <NavBar />

      <div className="bg-black flex flex-col gap-6 justify-center items-center py-[50px] relative px-5 lg:px-[100px]">
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[100px] absolute -top-[30px] -left-[40px]" />
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[20px] absolute top-[30px] left-[150px]" />
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[100px] absolute -bottom-[40px] -right-[40px] z-10" />
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[20px] absolute bottom-[30px] right-[150px]" />
        <Text variant="secondary" size="lg" className="capitalize">
          The Ugochi & Ugochi Pricing $199 Per Letter
        </Text>
        <Text
          variant="secondary"
          size="sm"
          className="capitalize relative z-30"
        >
          * + $229 for the LetterDash service fee (this is how LetterDash and
          LetterDash staff is paid.) for all services rendered by LetterDash
          including but not limited to the warp speed facilitation,
          administration and processing of the letter/product as well as the
          shipping, handling and postage. This is NOT a shipping and handling
          fee. The S/H is simply included as part of the fee
        </Text>
        <Text
          variant="secondary"
          size="md"
          className="capitalize relative z-30"
        >
          Completely free, no-obligation consultation is included
        </Text>
        <Text
          variant="secondary"
          size="sm"
          className="capitalize relative z-30"
        >
          Strong. Effective. Affordable
        </Text>
      </div>

      <div className="w-full px-5 lg:px-[100px] flex flex-col  my-10">
        <Text variant="primary" size="md" className="capitalize text-start">
          What type of letters fall under our standard pricing?
        </Text>
        <Text variant="primary" size="sm" className="capitalize text-start">
          Any legal letter: demand letters, intent to sue letters, cease and
          desist letters, opinion letters, hardship letters, 401k letters,
          merchant processor letters, financial transaction letters, etc.
        </Text>

        <Text
          variant="primary"
          size="md"
          className="capitalize text-start mt-6"
        >
          Average National Price
        </Text>
        <Text variant="primary" size="sm" className="capitalize text-start">
          The average national price of a demand letter when purchased directly
          through an attorney or law firm is roughly $1,375. Some attorneys
          charge between $3,000 and $5,000 in legal fees for an identical demand
          letter service. Total insanity! The logic is that most attorneys want
          to take your "case", not piece-meal a demand letter service - and
          therefore they normally require a "retainer" for which they can draw
          from just to write your one-off letter.
        </Text>

        <Text
          variant="primary"
          size="md"
          className="capitalize text-start mt-6"
        >
          How do we do it?
        </Text>

        <Text variant="primary" size="sm" className="capitalize text-start">
          It's simple. Letter writing is one of the most frequent tasks for all
          business and contract attorneys. We've partnered with great attorneys
          accross the United States that have agreed to participate in our
          $199/per letter model because it normally doesn't cost them more than
          three hours of time or their paralegal's - and they still make a small
          profit while working to earn your future business if it's required
          beyond the letter writing.
        </Text>

        <Text
          variant="primary"
          size="sm"
          className="capitalize text-start my-6"
        >
          In addition, and as an aside, our staff writers and optimizers review
          all letters prior to delivery to ensure they are optimized to the
          fullest extent based on data and insights we've collected from
          hundreds of letters, transactions, responses and reactions received
          from the recipients that have received a letter that was sent to them
          by an attorney via the LetterDash platform.
        </Text>

        <Button variant="primary" className="p-4 max-w-[300px]">
          <Link href="/request">
            Get Started
          </Link>
        </Button>
      </div>

      <div className="border-t border-[#eed7e9] py-4 flex justify-between items-center px-4 lg:px-[100px]">
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
            <a className="border-l border-black px-3" href="sms:+2348032816755">
              (+234) 803 281 6755
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
}
