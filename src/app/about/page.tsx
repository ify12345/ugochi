import React from "react";
import NavBar from "../components/landing/NavBar";
import { Footer } from "../components/landing/Footer";
import Text from "@/app/components/Text";
import Link from "next/link";
import { Reviews } from "../components/Reviews";

export default function About() {
  return (
    <div className="bg-[#F4EEE4] h-full">
      <NavBar />
      <div className="bg-black flex flex-col gap-6 justify-center items-center py-[50px] relative">
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[100px] absolute -top-[30px] -left-[40px]" />
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[20px] absolute top-[30px] left-[150px]" />
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[100px] absolute -bottom-[40px] -right-[40px] z-10" />
        <div className="rounded-full border-[#F4EEE4] bg-[#F4EEE4] size-[20px] absolute bottom-[30px] right-[150px]" />
        <Text variant="secondary" size="lg" className="capitalize">
          The Ugochi & Ugochi Story
        </Text>
        <Text variant="secondary" size="sm" className="capitalize relative z-30">
          The only company obsessed with legal letter dominance.
        </Text>
      </div>
      <div className="flex flex-col lg:flex-row px-5 my-[40px] lg:px-[100px] gap-6">
        <div className="w-full lg:w-[50%] flex flex-col gap-10">
          <Text variant="primary" size="sm" className="capitalize text-start">
            Legal letters are the single most powerful aspect of legal conflict
            resolution, the least understood, and the most difficult of all
            legal services to obtain quickly, easily and affordably.
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="capitalize text-start font-extrabold"
          >
            Ugochi is a disruptor:
          </Text>
          <ul>
            <ol>
              Ugochi has effectively disrupted and replaced the old, sluggish,
              expensive process of finding and hiring an attorney to draft and
              send your letters with one that is fast, efficient and affordable.
            </ol>
            <ol>
              These letters include: demand letters, intent to sue letters,
              cease and desist letters, opinion letters, hardship letters, 401k
              letters, merchant processor letters, financial transaction
              letters, etc.
            </ol>
            <ol>
              Rather than wait several weeks and pay thousands of dollars for a
              letter, LetterDash has an attorney deliver a first draft to you
              within 48 business hours and saves you thousands
            </ol>
          </ul>

          <Text
            variant="primary"
            size="sm"
            className="capitalize text-start font-extrabold"
          >
            Ugochi gives you an edge:
          </Text>
          <ul>
            <ol>
              Ugochi, unlike any lawyer, law firm or company out there,
              dedicates every resource available to analyzing the thousands of
              letters sent and responses received.
            </ol>
            <ol>
              Day in and day out, we obsess over optimizing every aspect of
              these letters based on the data, human analysis, and results and
              outcomes.
            </ol>
            <ol>
              And in doing so, we give our clients the highest probability of
              achieving a successful outcome in their case.
            </ol>
          </ul>
        </div>
        <div className="w-full lg:w-[50%]"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-center px-5 lg:px-[100px] bg-[#DFEEEE]">
        <div className="lg:h-full lg:w-[500px] flex justify-center">
          <img
            src="/img/logo.png"
            className="w-full "
            alt="ugochi"
          />
        </div>

        <div className="flex flex-col gap-10 max-w-[600px]">
          <Text variant="primary" size="md" className="capitalize text-start">
            Our founding
          </Text>
          <Text variant="primary" size="sm" className="capitalize text-start">
            Ugochi was founded by Mr Victor in 2018 after years of frustration
            with the process of searching for, finding and retaining an attorney
            to draft and send letters. This started as a simple breach of
            contract letter service and a single attorney. Our obsession
            transformed into what is now the single largest and fastest growing
            provider of legal letters and legal pleadings.
          </Text>
        </div>
      </div>

      <Reviews/>

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
