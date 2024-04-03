/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="z-10 absolute bottom-[10%] left-[10%] font-sans text-white space-y-[20px]">
        <div className="text-[42px] font-semibold w-[770px]">
          <p>
            {t("Welcome to")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-600">
              Galaxy Badminton
            </span>
          </p>
        </div>
        <div className="w-[754px]">
          <p className=" text-[24px] font-bold">
            {t(
              "Experience the most popular badminton courts in HCM City. Stun others with your splendid display of backhand and smash strokes!"
            )}
          </p>
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
