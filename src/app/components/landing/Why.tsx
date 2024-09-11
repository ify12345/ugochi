import React from "react";
import { GiClockwork } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { GiJetpack } from "react-icons/gi";
import { MdPerson3 } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import Text from "../Text";

export const Why = () => {
  return (
    <div className="justify-center items-center lg:mx-auto flex flex-col px-5 lg:px-20 my-[40px] space-y-10">
      <Text variant="primary" size="lg" className="max-w-[800px]  capitalize ">
        {"Serving clients and offering expert consultation services!"}
      </Text>

      <div className="grid lg:grid-cols-3 gap-10 mx-auto items-center justify-center">
        <div className="flex-col flex items-center justify-center w-[300px] gap-3">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <GiClockwork size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            Insane 48 Hour Turnaround
          </Text>

          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            Attorneys outside of Ugochi take weeks to deliver. LetterDash
            delivers in 48 business hours
          </Text>
        </div>

        <div className="flex-col flex items-center justify-center w-[300px] gap-3">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <MdPerson3 size={24} color="#987952" />
          </div>

          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            Top tier attorneys.
          </Text>

          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            Drafted and sent by no-nonsense licensed attorneys that provide an
            exceptional quality of work.
          </Text>
        </div>

        <div className="flex-col flex items-center justify-center w-[300px] gap-3">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <GiJetpack size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            Fast, zero-hassle process
          </Text>

          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            No waiting around. No complicated forms. No robots. Just answer a
            few simple questions and the law firms do the rest.
          </Text>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:mx-auto mt-8 justify-center lg:w-[850px] items-center w-full mx-40 lg:px-0">
        <div className="flex-col flex items-center justify-center   gap-3">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <GoLaw size={24} color="#987952" />
          </div>
          <Text variant="primary" size="md" className="capitalize">
            Want to file a lawsuit as well?
          </Text>

          <Text variant="primary" size="sm" className=" capitalize">
            No problem! We have a fast, zero-hassle process to assist with the
            lawsuit filing process later on.
          </Text>
        </div>

        <div className="flex-col flex items-center justify-center   gap-3">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <ImPriceTags size={24} color="#987952" />
          </div>
          <Text variant="primary" size="md" className=" capitalize">
            $199 Per Letter
          </Text>
          <Text variant="primary" size="sm" className="capitalize">
            {"No more overpaying. Most law firms charge an average of $1,375 for a simple letter. You'll get it for $199 via Ugochi.."}
          </Text>
        </div>
      </div>
    </div>
  );
};
