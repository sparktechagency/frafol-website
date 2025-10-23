import Image from "next/image";
import React from "react";
import { AllImages } from "../../../../../public/assets/AllImages";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock, LuUsers } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { MdDelete, MdEdit, MdLocationPin } from "react-icons/md";
import { IWorkshop } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { formatDate, formetTime } from "@/utils/dateFormet";
import Link from "next/link";

const ProfessionalWorkshopCard = ({
  workshop,
  showDeleteModal,
  showEditModal,
  showViewParticipantModal,
}: {
  workshop: IWorkshop;
  showDeleteModal: (record: IWorkshop) => void;
  showEditModal: (record: IWorkshop) => void;
  showViewParticipantModal: (record: IWorkshop) => void;
}) => {
  const serverUrl = getServerUrl();
  console.log(workshop);
  return (
    <div className="p-1.5 rounded-xl border border-background-color">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          src={
            workshop?.image ? serverUrl + workshop?.image : AllImages?.workspace
          }
          alt="workspace"
          className="w-full h-80 sm:h-60 lg:h-72 xl:h-80 object-cover rounded-lg "
        />
        <div className="flex items-center justify-between gap-2 absolute top-2  w-full px-2">
          {workshop?.vatAmount > 0 ? (
            <span className="text-xs sm:text-sm bg-secondary-color text-primary-color py-0.5 px-1.5 rounded-full ">
              VAT Included: {workshop?.vatAmount}%
            </span>
          ) : (
            <span></span>
          )}
          <div className="flex items-center gap-2 justify-end">
            <div
              onClick={() => showEditModal(workshop)}
              className="flex items-center p-1 bg-secondary-color rounded-full"
            >
              <MdEdit className="text-lg text-primary-color cursor-pointer" />
            </div>
            <div
              onClick={() => showDeleteModal(workshop)}
              className="flex items-center p-1 bg-secondary-color rounded-full"
            >
              <MdDelete className="text-lg text-primary-color cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-1">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
          {workshop?.title}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <Image
            width={1000}
            height={1000}
            src={
              workshop?.authorId?.profileImage
                ? serverUrl + workshop?.authorId?.profileImage
                : AllImages?.dummyProfile
            }
            alt="user"
            className="w-8 h-8 object-cover rounded-full "
          />
          <p className="text-xs sm:text-sm lg:text-base font-bold">
            {workshop?.authorId?.name}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {formatDate(workshop?.date)}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {formetTime(workshop?.time)}
          </p>
        </div>
        {workshop?.locationType === "online" ? (
          <div className="flex items-center gap-2 mt-1">
            <FaLink className="text-secondary-color text-sm sm:text-base lg:text-lg" />
            <Link
              href={workshop?.workshopLink}
              target="_blank"
              className="text-xs sm:text-sm lg:text-base font-semibold !text-secondary-color"
            >
              {workshop?.workshopLink}
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-1">
            <MdLocationPin className="text-secondary-color text-sm sm:text-base lg:text-lg" />
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              {workshop?.location}
            </p>
          </div>
        )}
        <div className="flex items-center gap-2 mt-1">
          <LuUsers className="text-secondary-color text-sm sm:text-base lg:text-lg" />
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            {workshop?.totalParticipants || 0}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-5 justify-between">
          <p className="text-base sm:text-lg lg:text-xl font-semibold">
            {workshop?.mainPrice}€
          </p>
          <ReuseButton
            onClick={() => showViewParticipantModal(workshop)}
            variant="secondary"
            className="!text-xs sm:!text-sm lg:!text-base w-fit !px-2 !py-1"
          >
            View Participants
          </ReuseButton>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalWorkshopCard;
