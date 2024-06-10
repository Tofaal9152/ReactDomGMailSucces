import React, { useState } from "react";
// React Icons
import { FaCaretDown } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";
import { MdLegendToggle } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiInboxFill } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { MdOutlineStarBorder } from "react-icons/md";
import Messages from "./Messages";

const Mails = () => {
  const [clickedColor, setclickedColor] = useState(0);
  const arrayOfPPs = [
    {
      icon: <RiInboxFill size={20} />,
      message: "Primary",
    },
    {
      icon: <IoPricetagOutline size={20} />,
      message: "Promotions",
    },
    {
      icon: <MdOutlinePeopleAlt size={20} />,
      message: "Soical",
    },
  ];
  return (
    <div className="w-full p-[1%]">
      {/* checkbox */}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <input className="cursor-pointer" type="checkbox" name="" id="" />
          <FaCaretDown className="cursor-pointer" size={18} />
          <GrPowerReset className="cursor-pointer" size={18} />
          <HiDotsVertical className="cursor-pointer" size={18} />
        </div>
        <div className="flex items-center space-x-3">
          <MdLegendToggle className="cursor-pointer" size={18} />
          <FaCaretDown className="cursor-pointer" size={18} />
        </div>
      </div>
      {/* Primary || Promotions || Soical */}

      <div className="flex items-center mt-[1.5rem] space-x-1 border-b-[1px]">
        {arrayOfPPs.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setclickedColor(index)}
              className={`${
                clickedColor == index
                  ? "border-b-[2px] border-blue-400 text-blue-500"
                  : ""
              }  flex items-center w-[13rem] h-[3rem] p-3 space-x-3 text-md hover:bg-[#F4F4F4] cursor-pointer`}
              //   className="border-b-2 border-blue-400 text-blue-500 flex items-center w-[13rem] h-[3rem] p-3 space-x-3 text-md hover:bg-[#F4F4F4]"
            >
              {item.icon}
              <span>{item.message}</span>
            </div>
          );
        })}
      </div>
      {/* Maills */}
      <Messages/>
      <Messages/>
      <Messages/>
    </div>
  );
};
export default Mails;