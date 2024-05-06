import React from "react";
import Banner from "./banner";
import Events from "./events";
import CheckUsOut from "./checkUsOut";
import Contentbanner from "./contentBanner";

export default function HomePage() {
  return (
    <div className="w-full space-y-[50px] flex flex-col justify-center items-center">
      <Banner />
      <div className="mid-size:w-[1160px] px-[24px] mid-size:px-0 space-y-[50px] ">
        <Events />
        <CheckUsOut />
        <Contentbanner />
      </div>
    </div>
  );
}
