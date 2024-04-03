import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLocationDot, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
export default function SideBar() {
  const { t } = useTranslation();
  const router = useRouter();
  const menuList = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutUs" },
    { label: "Shop", link: "/shop" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="w-[367px] h-screen absolute right-0 top-0 z-50 bg-white overflow-y-auto p-[10px] space-y-[20px]">
      {/* logo and close  */}
      <div className="flex justify-between items-start">
        <Image
          className=" cursor-pointer rounded-full "
          src="/images/logo.jpg"
          alt="giving"
          width={90}
          height={0}
        />
        <AiFillCloseCircle size={30} className="hover:cursor-pointer" />
      </div>

      {/* content here  */}
      {/* <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div> */}

      <div className="space-y-[10px]">
        {menuList?.map((data, index) => (
          <div
            className={`h-[40px] bg-cus-bg-grey flex justify-start items-center  ${
              router.pathname?.trim() === data.link
                ? "!bg-cus-bg-blue text-white"
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
