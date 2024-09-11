
import React from "react";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import Text from "../Text";

export const Testimonial = () => {
  return (
    <div className="relative justify-center items-center mx-auto flex flex-col gap-5 w-full">
      <div className="hidden lg:block absolute left-0 top-[30%] z-10">
        <img src="/img/jury.png" className="max-w-[300px] " alt="ugochi" />
      </div>
      <BsChatLeftQuoteFill color="#987952" size={44} />
      <Text
        variant="primary"
        size="md"
        className="max-w-[800px]  capitalize mx-2"
      >
        Ugochi was amazing! Another local lawyer wanted a $3,000 retainer and
        $500 just to send a letter of intent. These guys did the job for $250
        and the attorney assigned to my case treated me like I was one of their
        clients on retainer.
      </Text>
      <Text variant="primary" size="sm" className="max-w-[800px]  capitalize">
        Victor Nelson, Ugochi $ Ugochi Client
      </Text>
    </div>
  );
};
