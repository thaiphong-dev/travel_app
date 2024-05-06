/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Contentbanner() {
  const mockData = [
    "/images/banner/bannerCourt.webp",
    "/images/banner/banner.webp",
    "/images/banner/banner1.webp",
  ];

  return (
    <div className="w-full relative">
      <Swiper
        className="w-full mid-size:!w-[1160px] "
        autoplay={{
          delay: 2500,
        }}
        speed={1200}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={"auto"}
      >
        {mockData?.map((x, index) => (
          <SwiperSlide className="flex justify-center items-center" key={index}>
            <img
              alt="banner"
              className="w-full overflow-hidden h-[242px] mid-size:h-[625px] object-cover"
              src={x}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
