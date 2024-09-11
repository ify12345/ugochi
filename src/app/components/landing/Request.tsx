import React from "react";
import Text from "../Text";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export const Request = () => {
  return (
    <div className="bg-black py-20  flex ">
      <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-5">
        <div className="flex flex-col max-w-[400px]">
          <Text variant="secondary" size="lg" className="capitalize text-start">
            Request a demand letter now
          </Text>
          <Text variant="secondary" size="sm" className="text-start ">
            Having an attorney send out a powerful, no-nonsense demand letter to
            an individual or company will quickly motivate them to do the right
            thing.
          </Text>
          <Text
            variant="secondary"
            size="sm"
            className="text-start text-[#F4EEE4] font-bold cursor-pointer"
          >
            {"I'm Ready!"}
          </Text>
        </div>

        <div className="bg-[#F4EEE4] lg:size-[500px] px-3 overflow-hidden rounded-md relative flex justify-center items-center">
          <img
            src="/img/letter.png"
            className="lg:w-[350px] lg:h-[250px] rounded-md "
            alt="ugochi"
          />
        </div>

        <div className="flex flex-col max-w-[500px] gap-6">
          <div className="flex flex-col max-w-[500px]">
            <Text
              variant="secondary"
              size="md"
              className="capitalize text-start text-[#F4EEE4]"
            >
              Request a letter now
            </Text>
            <Text variant="secondary" size="sm" className="text-start text-[#F4EEE4]">
              {"You're one simple form away from requesting a letter.."}
            </Text>
            <Link href="/request" className="hover:underline">
            
            <Text
              variant="secondary"
              size="sm"
              className="text-start text-[#F4EEE4] font-bold cursor-pointer"
            >
              {"Get Stared"}
            </Text>
          </Link>
          </div>
          <div className="flex flex-col max-w-[500px]">
            <Text
              variant="secondary"
              size="md"
              className="capitalize text-start text-[#F4EEE4]"
            >
              Have Questions?
            </Text>
            <Text variant="secondary" size="sm" className="text-start text-[#F4EEE4]">
              {"No problem. Fill out this form and someone will contact you shortly with answers"}
            </Text>
            <Link href="/request" className="flex justify-end mt-6">
            <FaArrowRight size={24} color="#F4EEE4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
