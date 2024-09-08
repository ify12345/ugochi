import React from "react";
import { GiClockwork } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { GiJetpack } from "react-icons/gi";
import { MdPerson3 } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";

export const How = () => {
  return (
    <div className="justify-center items-center mx-auto flex flex-col gap-5 w-full">
      <p className="text-3xl">{"Here's how it works"}</p>

      <div className="grid lg:grid-cols-3 gap-4 mx-auto items-center justify-center">
        <div className="flex-col flex items-center justify-center">
          <GiClockwork size={24} />
          <p className="text-[24px] font-bold text-center">One Simple Form</p>
          <p className="text-[14px] font-light text-center">
            You provide Ugochi with the case details and supporting
            documentation.
          </p>
        </div>

        <div className="flex-col flex items-center justify-center">
          <MdPerson3 size={24} />
          <p className="text-[24px] font-bold text-center">
            Your Case is Assigned
          </p>
          <p className="text-[14px] font-light text-center">
            LetterDash assigns your case to a licensed attorney for drafting.
          </p>
        </div>

        <div className="flex-col flex items-center justify-center">
          <GiJetpack size={24} />
          <p className="text-[24px] font-bold text-center">
            First Draft Review
          </p>
          <p className="text-[14px] font-light text-center">
            The attorney delivers the first draft and we send it to you for
            review.
          </p>
        </div>
      </div>
        <div className="grid lg:grid-cols-2 gap-4 mx-auto mt-8 justify-center px-10 items-center">
          <div className="flex-col flex items-center justify-center">
            <GoLaw size={24} />
            <p className="text-[24px] font-bold text-center">
              Draft Revisions and Final Approval
            </p>
            <p className="text-[14px] font-light text-center">
              Revisions are completed. You provide the final approval.
            </p>
          </div>

          <div className="flex-col flex items-center justify-center">
            <ImPriceTags size={24} />
            <p className="text-[24px] font-bold text-center">
              Delivery and Responses
            </p>
            <p className="text-[14px] font-light text-center">
              Your letter is sent out via USPS, certified, signature required.
              If the opposition responds, it's immediately forwarded to you.
            </p>
          </div>
        </div>
    </div>
  );
};
