/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function Banner() {
  return (
    <div className="w-full">
      <div className="z-10 absolute top-[20%] left-[15%] w-[754px] text-white">
        <div className="text-[42px] font-semibold">
          <p>
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-600">
              Galaxy Badminton
            </span>
          </p>
        </div>
        <div>
          <p className="capitalize text-[60px] font-bold">
            WE LOOK UP, <br /> NEVER GIVE UP
          </p>
        </div>
        <div className="pt-[10%] flex">
          <button className="bg-primary-2 text-white uppercase  font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-[15px] flex justify-center items-center space-x-[10px] "></button>

          {/* <button className="bg-white uppercase text-primary-3 font-semibold min-w-[10rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            discover
          </button> */}
        </div>
      </div>

      <img
        alt="banner"
        className="w-screen h-screen blur-[4px] "
        src="/images/banner2.jpg"
      />
    </div>
  );
}
