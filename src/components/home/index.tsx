import React from "react";
import Banner from "./banner";
import Events from "./events";

export default function HomePage() {
  return (
    <div className="w-full space-y-[30px] flex flex-col justify-center items-center">
      <Banner />
      <div className="mid-size:w-[1160px] mid-size:px-[24px]">
        <Events />
      </div>
      {/* <CourtInformation /> */}
    </div>
  );
}
