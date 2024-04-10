import React from "react";

interface Props {
  title: string;
}
export default function SingleBlockTitle({ title }: Props) {
  return (
    <div className="w-[100%] text-center">
      <div className="flex items-center justify-around space-x-[20px]">
        {/* line before  */}
        <div className="h-[1px] bg-cus-primary2 w-[50%]"></div>
        <p className="text-[30px] font-semibold uppercase text-cus-primary2">
          {title}
        </p>
        {/* line after  */}
        <div className="h-[1px] bg-cus-primary2 w-[50%]"></div>
      </div>
    </div>
  );
}
