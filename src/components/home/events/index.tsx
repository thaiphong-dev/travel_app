import React from "react";
import SingleBlockTitle from "../singleBlockTitle";
import Image from "next/image";

export default function Events() {
  const mockData = [
    "/images/home/event1.jpg",
    "/images/home/event2.jpg",
    "/images/home/event3.jpg",
    "/images/home/event4.jpg",
  ];

  return (
    <div>
      <SingleBlockTitle title="#letgosmash" />
      <div className="grid grid-cols-2 gap-[20px] mid-size:grid-cols-4 mid-size:gap-[70px] mt-[50px] ">
        {mockData?.map((data, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] mid-size:w-[242px] mid-size:h-[242px] flex justify-center "
          >
            <Image alt={data} src={data} width={242} height={242} />
          </div>
        ))}
      </div>
    </div>
  );
}
