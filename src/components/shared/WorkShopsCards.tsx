/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { FaLink, FaLocationDot } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import ReuseButton from "../ui/Button/ReuseButton";
import { IWorkshop } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { formatDate, formetTime } from "@/utils/dateFormet";

const WorkShopsCards = ({
  data,
  openModal,
}: {
  data: IWorkshop;
  openModal: () => void;
}) => {
  const serverUrl = getServerUrl();
  return (
    <div className="p-1.5 rounded-xl border border-background-color">
      <Image
        width={1000}
        height={1000}
        src={data?.image ? serverUrl + data?.image : AllImages?.dummyCover}
        alt="workspace"
        className="w-full h-80 sm:h-60 lg:h-72 xl:h-80 object-cover rounded-lg "
      />
      <div className="px-1">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
          {data?.title}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <Image
            width={1000}
            height={1000}
            src={
              data?.authorId?.profileImage
                ? serverUrl + data?.authorId?.profileImage
                : AllImages?.dummyProfile
            }
            alt={data?.authorId?.name || "Profile Image"}
            className="w-8 h-8 object-cover rounded-full "
          />
          <p className="text-xs sm:text-sm lg:text-base font-bold">
            {data?.authorId?.name}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {formatDate(data?.date)}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {formetTime(data?.time)}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {data?.locationType}
          </p>
        </div>
        {data?.locationType === "online" ? (
          <div className="flex items-center gap-2 mt-1">
            <FaLink className="text-secondary-color text-sm sm:text-base lg:text-lg" />
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              www.workshop.com
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-1">
            <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg" />
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              {data?.location}
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 mt-1">
          <LuUsers className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {data?.maxParticipant} participants
          </p>
        </div>
        <div className="flex items-center gap-2 mt-5 justify-between">
          <p className="text-base sm:text-lg lg:text-xl font-semibold">
            {data?.price}€
          </p>
          <ReuseButton
            variant="secondary"
            className="!text-xs sm:!text-sm lg:!text-base w-fit !px-2 !py-1"
            onClick={openModal}
          >
            Register Now
          </ReuseButton>
        </div>
      </div>
    </div>
  );
};

export default WorkShopsCards;
