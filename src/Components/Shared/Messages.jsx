import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate =useNavigate();
  const openMail = ()=>{
    navigate("/mail/KZbJ4xsfCTA&t=4001s");
  }
  return (
    <div onClick={openMail}>
      <div className="flex flex-col space-y-1 text-gray-500 mt-2">
        <div className="w-full flex  items-center justify-between  cursor-pointer border-[1.6px] hover:shadow-md px-3">
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="" id="" />
            <MdOutlineStarBorder size={25}/>
            <div className="px-[1%]">
              <p>
                Lorem ipsum dolor sit  oconsectetur elit. Veniam omnis deleniti rerum saepe, asperiores
              </p>
            </div>
          </div>
          <div className="w-[4.5rem]">
            <p>2:30 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
