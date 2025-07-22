/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { AllImages } from "../../../../../public/assets/AllImages";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuClock } from "react-icons/lu";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { MdDelete } from "react-icons/md";

const ProfessionalPackageCard = ({ showEditModal, showDeleteModal }: any) => {
  return (
    <div className="p-1.5 rounded-xl border border-background-color">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          src={AllImages?.categoryimg6}
          alt="workspace"
          className="w-full h-60 sm:h-40 lg:h-52 xl:h-60 object-cover rounded-lg "
        />
        <div className="flex items-center justify-between gap-2 absolute top-2  w-full px-2">
          <span className="text-xs sm:text-sm bg-secondary-color text-primary-color py-0.5 px-1.5 rounded-full ">
            Photography
          </span>
          <div
            onClick={showDeleteModal}
            className="flex items-center p-1 bg-secondary-color rounded-full"
          >
            <MdDelete className="text-lg text-primary-color cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="px-1">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
          Standard Wedding Photography
        </p>

        <p className="text-xs sm:text-sm lg:text-base mt-1.5">
          Full-day coverage of your wedding day including preparation, ceremony,
          reception, and key moments.
        </p>

        <div className="flex flex-col gap-1 mt-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <BsCurrencyDollar className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Price:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">$50</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-xs sm:text-sm lg:text-base font-semibold">
                Duration:
              </p>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">3 Weeks</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5 justify-between">
          <ReuseButton
            onClick={showEditModal}
            variant="secondary"
            className="!text-base !py-4 !w-fit"
          >
            Edit Package
          </ReuseButton>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPackageCard;
