import React from "react";

import { GoLaw } from "react-icons/go";
import { GiJetpack, GiSwanBreeze } from "react-icons/gi";
import { MdPerson3 } from "react-icons/md";

import { ImPriceTags } from "react-icons/im";
import Text from "../Text";

export const How = () => {
  return (
    <div className="justify-center items-center mx-auto flex flex-col gap-5 w-full">
      <Text variant="primary" size="lg" className="max-w-[800px]  capitalize ">
        {"Here's how it works"}
      </Text>

      <div className="grid lg:grid-cols-3 gap-4 mx-auto items-center justify-center">
        <div className="flex-col flex items-center justify-center">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <GiSwanBreeze size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            One Simple Form
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            You provide Ugochi with the case details and supporting
            documentation.
          </Text>
        </div>

        <div className="flex-col flex items-center justify-center">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <MdPerson3 size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            Your Case is Assigned
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            LetterDash assigns your case to a licensed attorney for drafting.
          </Text>
        </div>

        <div className="flex-col flex items-center justify-center">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <GiJetpack size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            First Draft Review
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            The attorney delivers the first draft and we send it to you for
            review.
          </Text>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mx-auto mt-8 justify-center px-10 items-center">
        <div className="flex-col flex items-center justify-center">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <GoLaw size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            Draft Revisions and Final Approval
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            Revisions are completed. You provide the final approval.
          </Text>
        </div>

        <div className="flex-col flex items-center justify-center">
          <div className="rounded-lg flex items-center justify-center bg-stone-200 p-3">
            <ImPriceTags size={24} color="#987952" />
          </div>
          <Text
            variant="primary"
            size="md"
            className="max-w-[800px]  capitalize"
          >
            Delivery and Responses
          </Text>
          <Text
            variant="primary"
            size="sm"
            className="max-w-[800px]  capitalize"
          >
            Your letter is sent out via USPS, certified, signature required. If
            the opposition responds, it's immediately forwarded to you.
          </Text>
        </div>
      </div>
    </div>
  );
};
