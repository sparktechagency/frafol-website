import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { IoCalendarOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import ServiceCardBookNow from "../Professional/ServiceCardBookNow";
import { IPackage } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";

const ProfessionalServiceCard = ({ data }: { data: IPackage }) => {
  const serverUrl = getServerUrl();

  return (
    <div className="p-1.5 rounded-xl border border-background-color relative">
      <Image
        width={1000}
        height={1000}
        src={
          data?.thumbnailImage
            ? serverUrl + data?.thumbnailImage
            : AllImages?.dummyCover
        }
        alt="workspace"
        className="w-full h-60 sm:h-40 lg:h-52 xl:h-60 object-cover rounded-lg "
      />
      <div className="flex items-center justify-start gap-2 absolute top-3 w-full px-2">
        {data?.vatAmount > 0 ? (
          <span className="text-xs sm:text-sm bg-secondary-color text-primary-color py-0.5 px-1.5 rounded-full ">
            VAT Included: {data?.vatAmount}%
          </span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="px-1  mt-3">
        <span className="text-xs sm:text-sm bg-secondary-color text-primary-color py-0.5 px-1.5 rounded-full capitalize">
          {data?.category}
        </span>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
          {data.title}
        </p>
        <p className="text-xs sm:text-sm lg:text-base mt-1.5">
          {data.description}
        </p>
        <div className="flex flex-col gap-1 mt-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <BsCurrencyDollar className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Price:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">{data.price} </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Delivery Time:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">
              {data.duration / 7} Weeks
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
