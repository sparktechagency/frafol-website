import Image from "next/image";
import React from "react";
import { AllImages } from "../../../../../public/assets/AllImages";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { FaEuroSign, FaLink, FaLocationDot } from "react-icons/fa6";
import { IMyRegisteredWorkshop } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { formatDate, formetTime } from "@/utils/dateFormet";
import Link from "next/link";
import PaginationSection from "@/components/shared/PaginationSection";

const UserWorkshopPage = ({
  workshops,
  totalData,
  page,
  limit,
}: {
  workshops: IMyRegisteredWorkshop[];
  totalData: number;
  page: number;
  limit: number;
}) => {
  const serverUrl = getServerUrl();
  return (
    <div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  font-bold mb-10">
        My Workshop
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {workshops?.map((workshop, index) => (
          <div
            key={workshop._id || index}
            className="p-1.5 rounded-xl border border-background-color"
          >
            <Image
              width={1000}
              height={1000}
              src={
                workshop?.workshop?.image
                  ? serverUrl + workshop?.workshop?.image
                  : AllImages?.dummyCover
              }
              alt="workspace"
              className="w-full h-80 sm:h-60 lg:h-72 xl:h-80 object-cover rounded-lg "
            />
            <div className="px-1 flex flex-col justify-between">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
                {workshop?.workshop?.title}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Image
                  width={1000}
                  height={1000}
                  src={
                    workshop?.workshop?.authorId?.profileImage
                      ? serverUrl + workshop?.workshop?.authorId?.profileImage
                      : AllImages?.dummyProfile
                  }
                  alt={workshop?.workshop?.authorId?.name || "Profile Image"}
                  className="w-8 h-8 object-cover rounded-full "
                />
                <p className="text-xs sm:text-sm lg:text-base font-bold">
                  {workshop?.workshop?.authorId?.name}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                <p className="text-xs sm:text-sm lg:text-base font-semibold">
                  {formatDate(workshop?.workshop?.date)}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                <p className="text-xs sm:text-sm lg:text-base font-semibold">
                  {formetTime(workshop?.workshop?.time)}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                <p className="text-xs sm:text-sm lg:text-base font-semibold capitalize">
                  {workshop?.workshop?.locationType}
                </p>
              </div>
              {workshop?.workshop?.locationType !== "online" ? (
                <div className="flex items-center gap-2 mt-1">
                  <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                  <p className="text-xs sm:text-sm lg:text-base font-semibold">
                    {workshop?.workshop?.location}
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-2 mt-1">
                  <FaLink className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                  <Link
                    href={workshop?.workshop?.workshopLink}
                    target="_blank"
                    className="text-xs sm:text-sm lg:text-base font-semibold"
                  >
                    {workshop?.workshop?.workshopLink}
                  </Link>
                </div>
              )}

              <div className="flex items-center gap-2 mt-1">
                <FaEuroSign className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                <p className="text-xs sm:text-sm lg:text-base font-semibold">
                  {workshop?.workshop?.mainPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <PaginationSection page={page} totalData={totalData} limit={limit} />
      </div>
    </div>
  );
};

export default UserWorkshopPage;
