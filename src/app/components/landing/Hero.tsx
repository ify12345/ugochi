
import React from "react";
import Link from "next/link";
import Text from "../Text";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="lg:justify-center items-center mx-auto flex flex-col">
      <Text variant="primary" size="lg" className="max-w-[800px]  capitalize ">
        HIGH QUALITY LEGAL CONSULTANCY
      </Text>

      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-center w-full px-5">
        <span className="flex flex-col gap-4">
          <Text
            variant="primary"
            size="md"
            className="w-full lg:w-[400px] capitalize "
          >
            Fast, Affordable, Zero-hassle! Get local attorneys to send your
            legal letter in 48 hours for $199.
          </Text>

          <Button variant="primary" className="block p-4">
          <Link href="/request" className="">
            
            Request a letter
          </Link>
          </Button>
        </span>
        <div className="lg:h-full max-w-full flex justify-center">
          <img src="/img/law.png" className="w-full lg:w-[400px]" alt="ugochi" />
        </div>
        <Text
          variant="primary"
          size="md"
          className="w-full lg:w-[400px] capitalize lg:-mt-[260px]"
        >
          Your letter is sent via E-mail and fedex,downloadable certified legal
          signatures.
        </Text>
      </div>
    </div>
  );
}
