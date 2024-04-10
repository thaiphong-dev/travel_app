import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import SideBar from "../sideBar";

export default function Header() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const { t } = useTranslation();
  const menuList = [
    { label: "Home", link: "/" },
    { label: "Book now", link: "/booking" },
    { label: "Pricing", link: "/pricing" },
    { label: "Shop", link: "/shop" },
    { label: "Facilities", link: "/facilities" },
    { label: "Location", link: "/location" },
    { label: "FAQ", link: "/faq" },
    { label: "Account", link: "/account" },
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
    <div className="relative flex flex-col justify-center items-center mid-size:mb-[50px]">
      <div
        className="flex justify-center items-center my-[50px] w-[230px] h-[70px] mid-size:h-[300px] mid-size:w-[500px] mid-size:my-0 "
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          onClick={() => {
            router.push("/");
          }}
          className=" cursor-pointer "
          src="/images/smash.webp"
          alt="giving"
          width={500}
          height={0}
        />
        {/* PL Badminton */}

        <div className="absolute right-[20px] pl-[30px] hover:cursor-pointer mid-size:hidden">
          <RxHamburgerMenu size="25px" onClick={() => setIsShowSideBar(true)} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center ">
          <ul className="hidden min-[1120px]:flex items-center justify-between space-x-[1rem]">
            {menuList.map((item, index) => {
              return (
                <li
                  className={` uppercase min-w-[90px] cursor-pointer text-center font-medium hover:text-cus-primary2  ${
                    pathName?.trim() === item.link
                      ? "!text-cus-primary-dark"
                      : ""
                  }`}
                  key={index}
                >
                  <Link href={item.link}>{t(item.label)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* // side bar menu  */}
      {/* cover screen  */}
      {isShowSideBar && (
        <div
          className="w-screen h-screen absolute top-0 left-0 bg-black opacity-50 z-50"
          onClick={() => setIsShowSideBar(false)}
        ></div>
      )}
      <SideBar
        isShowSideBar={isShowSideBar}
        setIsShowSideBar={setIsShowSideBar}
      />
    </div>
  );
}
