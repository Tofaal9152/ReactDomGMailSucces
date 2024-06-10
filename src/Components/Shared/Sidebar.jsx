import React from "react";
// React icons
import { LuPencilLine } from "react-icons/lu";
import { RiInboxFill } from "react-icons/ri";
import { MdOutlineStarBorder } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
// Redux
import { useDispatch } from "react-redux";
import { toggle } from "../../redux/counterSlice";

const Sidebar = () => {
  
  const dispatch = useDispatch()
  const arrayOfIcon = [
    {
      icon: <RiInboxFill size={25} />,
      Message: "Inbox",
    },
    {
      icon: <MdOutlineStarBorder size={25} />,
      Message: "Starred",
    },
    {
      icon: <FiClock size={25} />,
      Message: "Snoozed",
    },
    {
      icon: <BiSend size={25} />,
      Message: "Sent",
    },
    {
      icon: <RiDraftLine size={25} />,
      Message: "Drafts",
    },
    {
      icon: <FaAngleDown size={25} />,
      Message: "More",
    },
  ];
  return (
    <div className="bg-[#F6F8FC] w-[17%] h-screen">
      {/* //first_Compass */}
      <div
        onClick={() => dispatch(toggle())}
        className="flex mx-2 justify-center items-center cursor-pointer space-x-2 bg-[#C2E7FF] w-[9rem] h-[3.7rem] duration-300 rounded-3xl hover:shadow-md"
      >
        <LuPencilLine size={25} />
        <span className="text-md text-gray-500 font-semibold">Compose</span>
      </div>
      {/* //second inbox */}
      <div className="mt-[2rem] space-y-2 pr-[4%]">
        {arrayOfIcon.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[2rem] flex items-center  cursor-pointer rounded-r-xl px-6 space-x-6 hover:bg-[#EAEBEF] "
            >
              {item.icon}
              <span className="font-md text-gray-600 text-lg">
                {item.Message}
              </span>
            </div>
          );
        })}
      </div>
      {/* //Label */}
      <div className="flex items-start justify-between mt-[3rem] px-[6%]">
        <span className="font-md text-gray-600 font-medium text-xl">
          Labels
        </span>
        <div className="p-2 duration-300 hover:bg-gray-300 rounded-full cursor-pointer">
          <FiPlus size={25} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
