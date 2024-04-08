/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Great_Vibes } from "next/font/google";

const great_Vibes = Great_Vibes({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Banner() {
  const { t } = useTranslation();
  const mockData = ["/images/banner/banner.jpg", "/images/banner/banner1.jpg"];
  return (
    <div className="w-full">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        loop
        modules={[Autoplay, Pagination, Navigation]}
      >
        {mockData?.map((x, index) => (
          <SwiperSlide key={index}>
            <div className="z-10 absolute font-sans text-white space-y-[20px] top-[30%] mid-size:bottom-[10%] mid-size:left-[10%] h-auto ">
              <div className="font-semibold text-[18px] w-[375px]  mid-size:text-[42px]  mid-size:w-[770px]">
                <p className={`${great_Vibes.className}`}>
                  {t("Welcome to")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-red-600">
                    PL Badminton
                  </span>
                </p>
              </div>
              <div className=" w-[375px] mid-size:w-[754px]">
                <p className=" text-[12px] mid-size:text-[24px] font-bold">
                  {t(
                    "Experience the most popular badminton courts in HCM City. Stun others with your splendid display of backhand and smash strokes!"
                  )}
                </p>
              </div>
            </div>
            <img
              alt="banner"
              className="w-full overflow-hidden h-[350px] mid-size:h-auto"
              src={x}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
