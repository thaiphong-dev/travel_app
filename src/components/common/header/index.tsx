"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export default function Header() {
  const menuList = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutUs" },
    { label: "Shop", link: "/shop" },
    { label: "Booking", link: "/booking" },
    { label: "Contact", link: "/contact" },
  ];
  const pathName = usePathname();
  const router = useRouter();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY", window.scrollY < 65);

      window.scrollY === 0 ? setIsTop(true) : setIsTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isTop
          ? "fixed top-0 bg-transparent transition-all duration-150 z-50 text-white "
          : "fixed top-0 bg-white z-50  text-primary-7 transition-all duration-150"
      } flex w-full items-center xs: px-[3rem]  sm: justify-between xs: pt-[1rem] xl: pb-[15px] space-x-[40px] `}
    >
      <div
        className="text-[24px]"
        onClick={() => {
          router.push("/");
        }}
      >
        {/* <Image
          onClick={() => {
            router.push("/");
          }}
          className=" cursor-pointer"
          src={isTop ? "/image/logo.png" : "/image/logo1.png"}
          alt="giving"
          width={150}
          height={0}
        /> */}
        LOGO
      </div>
      <div className="hidden  lg:block ">
        <ul className={` flex items-center justify-between space-x-[2rem]`}>
          {menuList.map((item, index) => {
            return (
              <li
                className={`min-w-[90px] cursor-pointer text-center text-[20px] hover:text-primary-2 hover:font-bold ${
                  pathName?.trim() === item.link ? "!text-primary-2" : ""
                }`}
                key={index}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" cursor-pointer hidden transform lg:block">
        <Link href="/login" className="text-[18px]  hover:text-primary-2 ">
          Login
        </Link>
        /
        <Link href="/register" className="text-[18px]  hover:text-primary-2 ">
          Register
        </Link>
      </div>

      <div className=" text-[24px] lg:hidden" onClick={() => {}}>
        {/* <Image
          onClick={() => {
            router.push("/");
          }}
          className=" cursor-pointer"
          src={isTop ? "/image/logo.png" : "/image/logo1.png"}
          alt="giving"
          width={150}
          height={0}
        /> */}
        MBMN
      </div>
    </div>
  );
}
