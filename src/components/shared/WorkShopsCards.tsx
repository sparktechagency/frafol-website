import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import ReuseButton from "../ui/Button/ReuseButton";

const WorkShopsCards = () => {
  return (
    <div className="p-1.5 rounded-xl border border-background-color">
      <Image
        width={1000}
        height={1000}
        src={AllImages?.workspace}
        alt="workspace"
        className="w-full h-80 sm:h-60 lg:h-72 xl:h-80 object-cover rounded-lg "
      />
      <div className="px-1">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
          Advanced Portrait Photography Workshop
        </p>
        <div className="flex items-center gap-2 mt-3">
          <Image
            width={1000}
            height={1000}
            src={AllImages?.dummyProfile}
            alt="user"
            className="w-8 h-8 object-cover rounded-full "
          />
          <p className="text-xs sm:text-sm lg:text-base font-bold">
            Marek Krajč
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            12.12.2023
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            10:00 - 12:00
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <FaLink className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            www.workshop.com
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <LuUsers className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            10 participants
          </p>
        </div>
        <div className="flex items-center gap-2 mt-5 justify-between">
          <p className="text-base sm:text-lg lg:text-xl font-semibold">$200</p>
          <ReuseButton
            variant="secondary"
            className="!text-xs sm:!text-sm lg:!text-base w-fit !px-2 !py-1"
          >
            Register Now
          </ReuseButton>
        </div>
      </div>
    </div>
  );
};

export default WorkShopsCards;
