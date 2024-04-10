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
  const mockData = ["/images/banner/bannerCourt.webp"];
  return (
    <div className="w-full relative">
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
            <div className="z-10 bg-white flex justify-center items-center w-[430px] mid-size:py-[40px] mid-size:px-[56px] mid-size:w-[500px] h-[265px] absolute  inset-x-0 mx-auto  inset-y-0 my-auto  opacity-90">
              <div className="flex flex-col justify-center items-center space-y-[20px]">
                <p className="text-[28px] uppercase font-semibold text-center">
                  PREMIUM PROFESSIONAL BADMINTON HALL IN <br />
                  HO CHI MINH
                </p>
                <button className="text-[16px] w-[90%] mid-size:w-[150px] h-[50px] rounded-full border-2 uppercase border-cus-invert-dark hover:bg-cus-invert hover:text-white hover:font-semibold">
                  Book now
                </button>
              </div>
            </div>
            <img
              alt="banner"
              className="w-full overflow-hidden h-[60vh] mid-size:h-[60vh] object-cover"
              src={x}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
