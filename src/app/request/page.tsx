import * as React from "react";

import NavBar from "../components/landing/NavBar";
import Text from "@/app/components/Text";
import Link from "next/link";
import Button from "../components/Button";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
export default function Request() {
  return (
    <div className="bg-[#F4EEE4] h-full">
      <NavBar hideRequestButton={true} />

      <div className="p-5 flex flex-col justify-center items-center mx-auto">
        <div className="shadow-2xl p-10 flex flex-col border-[#987952] max-w-[600px] rounded-lg">
          <Text
            variant="primary"
            size="md"
            className="capitalize font-extrabold text-start"
          >
            Request service now
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="capitalize text-start my-2"
          >
            You pay nothing for this request! There's no charge and no
            obligation.
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="capitalize text-start my-2"
          >
            Let's see if we can help. Complete the form below to request a local
            law firm draft and deliver your letter. We'll handle the rest.
          </Text>
          <Text
            variant="primary"
            size="md"
            className="font-extrabold text-start"
          >
            * DISCLAIMER:
            <span className="lg:leading-[14px] leading-[12px] text-[13px] lg:text-[16px] font-normal">
              {" "}
              We receive 100's of requests. If you're serious and ready to move
              forward immediately, please complete the form below and pay very
              careful attention to the instructions provided on the following
              page.
            </span>
          </Text>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                placeholder="Jane"
                className="p-4"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="p-4"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="p-4"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>

            <Text
              variant="primary"
              size="sm"
              className="capitalize text-start my-2"
            >
              If you are a repeat client, you must use your existing account do
              not create a new one.
            </Text>

            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <Text
                variant="primary"
                size="sm"
                className="capitalize text-start text-gray-400"
              >
                To access our platform, you need to create a password. Please
                enter one below and write it down.
              </Text>
              <input
                type="password"
                id="password"
                name="password"
                className="p-4"
              />
            </div>

          

            <div className="flex flex-col">
              <label htmlFor="phone">Cell Phone Number:</label>
              <Text
                variant="primary"
                size="sm"
                className="capitalize text-start text-gray-400 italic"
              >
                We will be texting you a confirmation after responding
              </Text>
              <input
                type="number"
                id="phone"
                name="phone"
                className="p-4"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="state">What state are you in?:</label>
            
              <input
                type="text"
                id="state"
                name="state"
                className="p-4"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="city">What city are you in?:</label>
            
              <input
                type="text"
                id="city"
                name="city"
                className="p-4"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="purpose">Is this a personal or professional matter?</label>
            
             <select className="p-4" name="purpose" id="purpose">
              <option value="personal">Personal</option>
              <option value="professional">Professional</option>
             </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="purposes">What do you need exactly?</label>
            
             <select className="p-4" name="purposes" id="purposes">
              <option value="demand">Demand letter</option>
              <option value="cease">Cease and decease letter</option>
              <option value="defamation">Defamation letter</option>
              <option value="cease">Breach of contract letter</option>
              <option value="cease">Other letter</option>
             </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="help">How can we help?:</label>
              <Text
                variant="primary"
                size="sm"
                className="capitalize text-start text-gray-400"
              >
                What is the situation exactly? The more information you provide here, the faster we can have an attorney assist you.
              </Text>
              <textarea className="p-4 h-[200px]"  name="help" id="help"></textarea>
            </div>

            <Button variant="primary" className="p-4 " type="submit">
              Next Step
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#eed7e9] py-4 flex justify-between items-center px-4 lg:px-[100px]">
        <Text
          variant="primary"
          size="sm"
          className="capitalize font-extrabold text-start"
        >
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
