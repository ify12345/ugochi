import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="justify-center items-center mx-auto flex flex-col">
      <h1 className="leading-[64px] text-[64px] max-w-[800px] text-center">
        HIGH QUALITY LEGAL CONSULTANCY
      </h1>

      <div className="flex items-center justify-center w-full">
        <span className="flex flex-col gap-4">
        <h1 className="w-[200px]">
          Fast, Affordable, Zero-hassle! Get local attorneys to send your legal
          letter in 48 hours for $199.
        </h1>
        <button className="p-2 hover:bg-[#4d4d4c] transition-all duration-150 text-white bg-[#25241E] rounded-lg">
            Request a letter
        </button>
        </span>
        <Image src="/img/law.png" width={500} height={10} alt="ugochi" />
        <h1 className="w-[200px] lg:-mt-[260px]">
          Your letter is sent via E-mail and fedex,downloadable certified legal signatures.
        </h1>
      </div>
    </div>
  );
}
