/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLocationDot, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

interface Props {
  setIsShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  isShowSideBar: boolean;
}
export default function SideBar({ isShowSideBar, setIsShowSideBar }: Props) {
  const { t } = useTranslation();
  const router = useRouter();
  const menuList = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutUs" },
    { label: "Shop", link: "/shop" },
    { label: "Contact Us", link: "/contact" },
  ];

  const [isCloseBar, setIsCloseBar] = useState(false);
  return (
    <div
      className={`w-[367px] h-screen fixed top-0 z-50 bg-white overflow-y-auto p-[10px] space-y-[20px] transition-all duration-500 ${
        !isShowSideBar ? "right-[-370px]" : "right-0"
      }`}
    >
      {/* logo and close  */}
      <div className="flex justify-between items-start">
        <Image
          className=" cursor-pointer rounded-full "
          src="/images/logo.jpg"
          alt="giving"
          width={90}
          height={0}
        />
        <AiFillCloseCircle
          size={30}
          className="hover:cursor-pointer"
          onClick={() => {
            setIsShowSideBar(false);
            setIsCloseBar(true);
          }}
        />
      </div>

      {/* content here  */}
      <div className="hidden mid-size:block">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="space-y-[10px] mid-size:hidden">
        {menuList?.map((data, index) => (
          <div
            className={`h-[40px] bg-cus-bg-grey flex justify-start items-center  ${
              router.pathname?.trim() === data.link
                ? "!bg-cus-primary2 text-white"
                : ""
            }  `}
            key={index}
          >
            {data.label}
          </div>
        ))}
      </div>

      {/* more info  */}
      <div className="space-y-[20px]">
        <div className="flex justify-start items-center space-x-[5px]">
          <FaLocationDot color="#f05c60" size={30} />
          <p> Ho Chi Minh city</p>
        </div>
        <div className="flex justify-start items-center space-x-[5px]">
          <FaWhatsapp color="#f05c60" size={30} />
          <p>03776212701</p>
        </div>
        <div className="flex justify-start items-center space-x-[5px]">
          <FaEnvelope color="#f05c60" size={30} />
          <p>thaiphong.dev@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
