import React from "react";
import { GiClockwork } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { GiJetpack } from "react-icons/gi";
import { MdPerson3 } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

export const Why = () => {
  return (
    <div className="justify-center items-center mx-auto flex flex-col px-5 lg:px-20 my-[40px] space-y-10">
      <p className="leading-[54px] text-[44px] max-w-[800px] text-center capitalize">
        {"Serving clients and offering expert consultation services!"}
      </p>

      <div className="grid lg:grid-cols-3 gap-4 mx-auto items-center justify-center">
        <div className="flex-col flex items-center justify-center">
          <GiClockwork size={24} />
          <p className="text-[24px] font-bold text-center">
            Insane 48 Hour Turnaround
          </p>
          <p className="text-[14px] font-light text-center">
            Attorneys outside of Ugochi take weeks to deliver. LetterDash
            delivers in 48 business hours
          </p>
        </div>

        <div className="flex-col flex items-center justify-center">
          <MdPerson3 size={24} />
          <p className="text-[24px] font-bold text-center">
            Top tier attorneys.
          </p>
          <p className="text-[14px] font-light text-center">
            Drafted and sent by no-nonsense licensed attorneys that provide an
            exceptional quality of work.
          </p>
        </div>

        <div className="flex-col flex items-center justify-center">
          <GiJetpack size={24} />
          <p className="text-[24px] font-bold text-center">
            Fast, zero-hassle process
          </p>
          <p className="text-[14px] font-light text-center">
            No waiting around. No complicated forms. No robots. Just answer a
            few simple questions and the law firms do the rest.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mx-auto mt-8 justify-center px-40 items-center">
        <div className="flex-col flex items-center justify-center">
          <GoLaw size={24} />
          <p className="text-[24px] font-bold text-center">
            Want to file a lawsuit as well?
          </p>
          <p className="text-[14px] font-light text-center">
            No problem! We have a fast, zero-hassle process to assist with the
            lawsuit filing process later on.
          </p>
        </div>

        <div className="flex-col flex items-center justify-center">
          <ImPriceTags size={24} />
          <p className="text-[24px] font-bold text-center">$199 Per Letter</p>
          <p className="text-[14px] font-light text-center">
            No more overpaying. Most law firms charge an average of $1,375 for a
            simple letter. You'll get it for $199 via Ugochi and Ugochi..
          </p>
        </div>
      </div>
    </div>
  );
};
