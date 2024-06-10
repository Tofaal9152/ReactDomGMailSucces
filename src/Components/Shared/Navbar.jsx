import React, { useState } from "react";
// Image from Assets
import gmail_icon from "../../assets/logo_gmail.png";
// Icons From React Icon
import { RxHamburgerMenu } from "react-icons/rx";
import { SlQuestion } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { IoMdOptions } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [bgColor, setbgColor] = useState(false);
  const navigate = useNavigate();
  const handleBgColor = () => {
    setbgColor(true);
  };
  return (
    <div className="bg-[#F6F8FC] flex items-center justify-between px-[4%] py-[0.6%]">
      {/* hamburger || icon */}
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <RxHamburgerMenu size={23} className="cursor-pointer" />
        </div>
        <img
          onClick={() => navigate("/")}
          src={gmail_icon}
          className="cursor-pointer"
          alt=""
        />
      </div>
      {/* Search */}
      <div
        className={`${
          bgColor ? "bg-white shadow-md" : ""
        } md:visible invisible flex items-center justify-between bg-[#EAF1FB] w-[42rem] h-[3rem] rounded-3xl px-[1%]`}
      >
        <div className="flex items-center ">
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
            <GoSearch size={23} />
          </div>
          <input
            type="text"
            onClick={handleBgColor}
            className={`outline-0 w-[31rem] bg-transparent pl-2 text-xl`}
            placeholder="Search mail"
          />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <IoMdOptions size={23} />
        </div>
      </div>
      {/* Account || Help */}
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <SlQuestion size={23} />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <IoSettingsOutline size={23} />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <IoApps size={23} />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100">
          <MdOutlineAccountCircle size={23} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
