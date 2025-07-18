/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import ServiceCardBookNow from "../Professional/ServiceCardBookNow";

const ProfessionalServiceCard = ({ data }: any) => {
  return (
    <div className="p-1.5 rounded-xl border border-background-color">
      <Image
        width={1000}
        height={1000}
        src={AllImages?.categoryimg6}
        alt="workspace"
        className="w-full h-60 sm:h-40 lg:h-52 xl:h-60 object-cover rounded-lg "
      />
      <div className="px-1">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
          {data.title}
        </p>

        <p className="text-xs sm:text-sm lg:text-base mt-1.5">
          {data.description}
        </p>

        <div className="flex flex-col gap-1 mt-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <BsCurrencyDollar className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Price:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">{data.price} </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Duration:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">
              {data.duration} hours{" "}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Delivery Time:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">
              {data.delivery} Weeks
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5 justify-between">
          <ServiceCardBookNow />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServiceCard;
