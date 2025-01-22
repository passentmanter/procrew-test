import React from "react";

// IMAGES
import whBg from "../assets/8c98994518b575bfd8c949e91d20548b.jpg";
import mobileShape from "../assets/freepik__adjust__49438.png";
import chatLogo from "../assets/Group 3301.svg";

// ICONS
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { CiBatteryFull } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { ImForward } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuMic } from "react-icons/lu";
import { PiStickerBold } from "react-icons/pi";

// Props Interface
interface MessageCardProps {
  name?: string;
  time?: string;
}

const MessageCard: React.FC<MessageCardProps> = ({
  name = "User",
  time = "10:30",
}) => {
  const phoneNumber: string = "+01205397703";

  const handleDoneClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    console.log("Link clicked!");
    alert("Hello! You clicked the link.");
  };

  return (
    <div className=" w-[281px] h-[576px]  relative flex justify-center items-center	">

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={mobileShape}
        alt="mobile shape"
      />
      <div className="top-0 left-0  w-[calc(100%_-_2.05em)] h-[calc(100%_-_1.5em)] overflow-hidden  flex-col bg-[#e5e5e5]  rounded-3xl ">
        
        {/* HEADER */}
        <div className="h-[7%] w-full max-w-full px-[1.05em] flex items-center justify-between	">
          <p className="m-0 font-bold text-[0.65em] ">{time}</p>
          <div className="flex gap-1 ">
            <FaSignal size={15} />
            <FaWifi size={15} />
            <CiBatteryFull size={15} />
          </div>
        </div>

        {/* MESSAGE HEADER */}
        <div className="h-[5%] flex items-center px-[1em] ">
          <img
            src={chatLogo}
            alt="chat Logo"
            className="w-[1.75em] h-[1.75em] p-[0.35em] rounded-full bg-white "
          />
          <span className="text-[0.75em] font-medium ml-2 color-[#171717] ">
            communicate
          </span>
        </div>

        <div
          style={{ backgroundImage: `url(${whBg})` }}
          className=" w-full h-[75%] pt-1 bg-cover my-1 bg-[image:var(--image-url)]"
        >
          {/* TIME INDICATOR */}
          <p className="text-[0.65em] font-bold w-fit m-auto my-4 px-4 py-0 rounded-lg bg-[#e4e4e7] shadow-md">
            Today
          </p>

          {/* MESSAGE */}
          <div className=" bg-white w-[78%] h-fit ml-[1.25em] rounded-lg p-2 text-left relative shadow-xl max-h-[50em]  hide__Scroll">
            <p className="max-h-[5em] overflow-scroll hide__Scroll text-[0.9em] font-medium	">
              Hello <span className="font-bold text-[#333]">{name}</span>, how
              are you doing?
            </p>
            <p className="text-[#999] text-[0.75em] font-medium	 mt-4 mb-1 ">
              Thank you for your time.
            </p>
            <span className="block text-right text-[0.75em] text-[#bbb] font-medium">
              {time}
            </span>

            <div className="flex flex-col item-center divide-y divide-solid divide-y-2 border-t-2">
              <a
                href="https://www.procrew.pro/"
                target="_blank"
                className="flex items-center gap-[0.5em] justify-center py-[0.75em] text-[#007bff] text-[0.75em] font-semibold  "
              >
                <FaExternalLinkAlt size={16} />
                Visit our website
              </a>

              <a
                href={`tel:${phoneNumber}`}
                target=""
                className="flex items-center gap-[0.5em] justify-center py-[0.75em] text-[#007bff] text-[0.75em] font-semibold  "
              >
                <IoIosCall size={16} />
                Call us
              </a>

              <a
                href="#"
                onClick={handleDoneClick}
                className="flex items-center gap-[0.5em] justify-center py-[0.75em] text-[#007bff] text-[0.75em] font-semibold  "
              >
                <ImForward size={16} className="origin-center rotate-180" />
                Done
              </a>
            </div>
            <div className="left__point"></div>
          </div>
        </div>

        {/* FOOTER */}
        <div className=" h-[7%] w-full max-w-full px-2 mb-[0.35em] flex items-center justify-between gap-1	">
          <FaPlus size={15} />
          <div className="w-[70%] h-[60%] px-1 bg-white rounded-xl flex items-center ">
            <PiStickerBold className="ml-auto " size={15} />
          </div>
          <MdOutlineCameraAlt size={15} />
          <LuMic size={15} />
        </div>

        {/* MOBILE SHAPE FOOTER */}
        <div className="w-[55%] h-[0.75%] rounded-md bg-[#0f172a]  m-auto "></div>
      </div>
    </div>
  );
};

export default MessageCard;
