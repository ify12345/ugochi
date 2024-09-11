import React from "react";
import Text from "@/app/components/Text";
import Link from "next/link";
import { TbTriangleInvertedFilled } from "react-icons/tb";

export const Reviews = () => {
  const review = [
    {
      img: "/img/avatar.png",
      name: "John Doe",
      text: "It is about time we have something like this. I needed a letter of opinion and I got quotes from other Lawyers ranging from $3,000-$5,000. Instead I got it for $250. They were fast, efficient and were responsive to all edit requests. This is a slam dunk. I am totally using them again.",
    },
  ];

  return (
    <div className="px-5 lg:px-[100px] py-5">
      <Text variant="primary" size="md" className="font-extrabold capitalize">
        What are our clients saying?
      </Text>

      {review.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-[50px] py-5">
          <div className="bg-white p-4 relative max-w-[800px]">
            <div className="absolute left-[46%] -bottom-[30px]">
              <TbTriangleInvertedFilled color="white" size={40}/>
            </div>
            <Text variant="primary" size="sm" className="capitalize">
              {item.text}
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full border w-20 h-20 overflow-hidden">
              <img src={item.img} alt="image" className="w-full h-full" />
            </div>

            <Text variant="primary" size="sm" className="capitalize">
              {item.name}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};
