import Image from 'next/image';
import React from 'react'
import { BsChatLeftQuoteFill } from "react-icons/bs";

export const Testimonial = () => {
  return (
    <div className="relative justify-center items-center mx-auto flex flex-col gap-5 w-full">
      <div className="absolute left-0 top-[30%]">
       <Image src="/img/jury.png" width={300} height={10} alt="ugochi" />
      </div>
        <BsChatLeftQuoteFill color='#987952' size={44} />
        <h1 className="text-4xl text-center max-w-[800px]">
        Ugochi was amazing! Another local lawyer wanted a $3,000 retainer and $500 just to send a letter of intent. These guys did the job for $250 and the attorney assigned to my case treated me like I was one of their clients on retainer.
        </h1>
        <h1 className="text-sm text-center">
          Victor Nelson, Ugochi $ Ugochi Client
        </h1>
    </div>
  )
}
