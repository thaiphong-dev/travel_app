/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SingleBlockTitle from "../singleBlockTitle";
import Image from "next/image";
import VideoPlayer from "@/components/common/videoPlayer";

export default function CheckUsOut() {
  const mockData = [
    "/images/home/event1.jpg",
    "/images/home/event2.jpg",
    "/images/home/event3.jpg",
    "/images/home/event4.jpg",
  ];
  const content = "https://youtu.be/umfcqBKw1Ck?si=U4752xGfwq9adOIa";
  return (
    <div>
      <SingleBlockTitle title="CHECK US OUT" />
      <div className="mt-[50px] space-y-[50px] ">
        <VideoPlayer url={content ?? ""} />
        <div className="flex flex-col justify-center items-center text-center leading-[30px] text-[16px] font-light text-slate-500">
          <p className="text-[20px] font-semibold text-slate-500 mb-[20px] ">
            Hello there,
          </p>
          <p className="text-[16px] font-light text-slate-500 ">
            We are a young indoor badminton hall in Viet Nam that opened in
            2023.
          </p>
          <div className="w-[320px] flex justify-center items-center">
            <p className="text-center">
              Our facilities have been carefully curated for a better "smashing"
              experience for you.
            </p>
          </div>
          <p>Let's go, smash on.</p>

          <button className="mt-[30px] w-[150px] h-[40px] rounded-full text-[16px] font-medium hover:text-white hover:bg-black  bg-white border-[2px] border-black ">
            Check us out
          </button>
        </div>
      </div>
    </div>
  );
}
