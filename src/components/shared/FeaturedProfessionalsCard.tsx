/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerUrl } from "@/helpers/config/envConfig";
import { IProfessional } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { AllImages } from "../../../public/assets/AllImages";

interface FeaturedProfessionalsCardProps {
  item: IProfessional;
}

const FeaturedProfessionalsCard: React.FC<FeaturedProfessionalsCardProps> = ({
  item,
}) => {
  const serverUrl = getServerUrl();

  return (
    <div className="flex flex-col gap-2">
      <Link href={`/professionals/${item?._id}`}>
        <Image
          width={2000}
          height={2000}
          src={
            item?.profileImage?.length > 0
              ? serverUrl + item?.profileImage
              : AllImages.dummyProfile
          }
          alt={item?.name || "item Image"}
          className="w-full !h-[350px] sm:!h-[400px] lg:!h-[450px] object-cover object-top rounded-tl-lg rounded-tr-lg "
        />
        <div className="p-1">
          <div className="flex justify-between">
            <h3 className="text-secondary-color text-sm sm:text-base lg:text-lg font-bold">
              {item?.name}
            </h3>
            <div className="flex items-center gap-1">
              <FaStar className="text-secondary-color text-sm sm:text-base lg:text-lg" />
              <p className="text-secondary-color text-sm sm:text-base lg:text-lg">
                {item?.totalReview}
              </p>
            </div>
          </div>
          <p className="text-base-color text-xs lg:text-sm font-medium mt-1">
            {item?.role === "both"
              ? "Videographer & Photographer"
              : item?.role === "photographer"
              ? "Photographer"
              : "Videographer"}
          </p>
          <p className="flex items-center gap-1 text-base-color text-xs lg:text-sm font-medium mt-1">
            <IoLocationSharp /> {item?.address}
          </p>
          <p className="text-base-color text-xs lg:text-sm font-medium mt-1">
            ${item?.hourlyRate}/hr
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProfessionalsCard;
