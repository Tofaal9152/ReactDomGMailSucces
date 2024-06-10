import React from "react";
// img
import gamil_compose from "../../assets/gmail-Compose toolbar.png";
// icons
import { RxCross2 } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";
import { MdCloseFullscreen } from "react-icons/md";
// redux
import { toggle } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";


const ComposeMail = () => {
  const tog = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        tog ? "visible" : "hidden"
      } bg-[aliceblue]  w-[40%] h-[28rem] fixed shadow-2xl right-10 bottom-0`}
    >
      {/* Top */}
      <div className="flex items-center justify-between p-2 bg-[#F2F6FC]">
        <p className="font-semibold text-md text-gray-600">New Message</p>
        <div className="flex gap-2">
          <RxCross2 onClick={() => dispatch(toggle())} className="cursor-pointer" />
          <VscChromeMinimize className="cursor-pointer" />
          <MdCloseFullscreen className="cursor-pointer" />
        </div>
      </div>
      {/* Recipients */}
      <div className="p-1">
        <div>
          <input
            type="text"
            placeholder="Recipients"
            className="outline-none border-b-[1px] w-full p-2 text-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="outline-none border-b-[1px] w-full p-2 text-md"
          />
        </div>
        <textarea
          className="w-full p-3 outline-none"
          rows={11}
          placeholder="Enter your text here..."
        ></textarea>
      </div>
      {/* Text Area */}
      {/* Bottom */}
      <div className="absolute bottom-0">
        <img className="cursor-pointer" src={gamil_compose} alt="" />
      </div>
    </div>
  );
};
export default ComposeMail;