import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import SideBar from "../sideBar";

export default function Header() {
  const { t } = useTranslation();
  const menuList = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutUs" },
    { label: "Shop", link: "/shop" },
    { label: "Contact Us", link: "/contact" },
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
    <div>
      <div
        className={` fixed top-0 bg-white z-50 text-cus-invert-dark text-[18px] transition-all duration-150 flex w-full items-center justify-between  px-[20px]  mid-size:px-[100px] `}
      >
        <div className="flex justify-center items-center">
          <div
            className="font-[600] text-[24px] text-cus-primary2 w-auto rounded-full flex justify-between items-center "
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              onClick={() => {
                router.push("/");
              }}
              className=" cursor-pointer rounded-full "
              src="/images/logo.jpg"
              alt="giving"
              width={70}
              height={0}
            />
            {/* PL Badminton */}
          </div>
          <ul className="hidden min-[1120px]:flex items-center justify-between space-x-[2rem]">
            {menuList.map((item, index) => {
              return (
                <li
                  className={` min-w-[90px] cursor-pointer text-center font-semibold hover:text-cus-primary2 hover:font-bold  ${
                    pathName?.trim() === item.link ? "!text-green-600" : ""
                  }`}
                  key={index}
                >
                  <Link href={item.link}>{t(item.label)}</Link>
                </li>
              );
            })}
            <li
              className={`min-w-[90px] cursor-pointer text-center font-semibold hover:text-cus-primary2 hover:font-bold `}
            >
              <button className="bg-cus-primary-dark w-[180px] text-white rounded-[34px] h-[40px] flex justify-center items-center hover:bg-green-800">
                <Link href="/booking">{t("Booking now")}</Link>
                <IoMdArrowDropdown />
              </button>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center w-[120px]">
          <SlHandbag size="30px" />
          <RxPerson size="30px" />
          <HiMiniSquares2X2 size="30px" />
        </div>
      </div>

      {/* // side bar menu  */}
      {/* <SideBar /> */}
    </div>
  );
}
