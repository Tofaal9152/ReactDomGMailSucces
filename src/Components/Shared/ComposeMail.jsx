import React, { useState } from "react";
// img
import gamil_compose from "../../assets/gmail-Compose toolbar.png";
// icons
import { RxCross2 } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";
import { MdCloseFullscreen } from "react-icons/md";
import { FiSend } from "react-icons/fi";
// redux
import { toggle } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { data_Baseing } from "../../firebase";

const ComposeMail = () => {
  // Toogle
  const tog = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // INput MEssage
  const [formData, setformData] = useState({
    Recipients: "",
    Subject: "",
    Message: "",
  });
  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // FirebaseInState
    await addDoc(collection(data_Baseing, "Composed_Email"), {
      Recipients: formData.Recipients,
      Subject: formData.Subject,
      Message: formData.Message,
      Time: serverTimestamp(),
    });
    setformData({
      Recipients: "",
      Subject: "",
      Message: "",
    });
  };

  return (
    <div
      className={`${
        tog ? "visible" : "hidden"
      } bg-[aliceblue]  w-[40%] h-[28rem] fixed shadow-2xl right-10 bottom-0`}
    >
      <form action="" onSubmit={submitHandler}>
        {/* Top */}
        <div className="flex items-center justify-between p-2 bg-[#F2F6FC]">
          <p className="font-semibold text-md text-gray-600">New Message</p>
          <div className="flex gap-2">
            <button type="submit">
              <FiSend
                onClick={() => dispatch(toggle())}
                className="cursor-pointer"
              />
            </button>
            <VscChromeMinimize className="cursor-pointer" />

            <RxCross2
              onClick={() => dispatch(toggle())}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* Recipients */}

        <div className="p-1">
          <div>
            <input
              onChange={changeHandler}
              value={formData.Recipients}
              name="Recipients"
              type="text"
              placeholder="Recipients"
              className="outline-none border-b-[1px] w-full p-2 text-md"
            />
          </div>
          <div>
            <input
              onChange={changeHandler}
              value={formData.Subject}
              name="Subject"
              type="text"
              placeholder="Subject"
              className="outline-none border-b-[1px] w-full p-2 text-md"
            />
          </div>
          <textarea
            onChange={changeHandler}
            value={formData.Message}
            name="Message"
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
      </form>
    </div>
  );
};
export default ComposeMail;
