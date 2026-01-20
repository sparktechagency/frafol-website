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
    <div className="flex flex-col gap-2 bg-base-color/[0.01] rounded-lg">
      <div className="relative">
        {
          item?.hasActiveSubscription && <div className="absolute top-2 left-2 flex items-center gap-1 bg-secondary-color p-1 rounded-3xl">
            <Image
              src={AllImages?.batch}
              width={2000}
              height={2000}
              alt={item?.name || "item Image"}
              className="size-2.5 sm:size-3 lg:size-4"
            />
            <p className="text-white text-[8px] sm:text-[10px] lg:text-xs font-bold">Frafol Choice</p>
          </div>
        }

        <Image
          width={2000}
          height={2000}
          src={
            item?.profileImage?.length > 0
              ? serverUrl + item?.profileImage
              : AllImages.dummyProfile
          }
          alt={item?.name || "item Image"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          className="w-full !max-h-[250px] sm:!max-h-[250px] lg:!max-h-[300px] aspect-video object-cover rounded-tl-lg rounded-tr-lg "
        />
      </div>
      <Link href={`/professionals/${item?._id}`}>
        <div className="p-2">
          <div className="flex justify-between">
            <h3 className="text-secondary-color text-sm sm:text-base lg:text-lg font-bold">
              {item?.name}
            </h3>
            {item?.averageRating > 0 && (
              <div className="flex items-center gap-1">
                <FaStar className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                <p className="text-secondary-color text-sm sm:text-base lg:text-lg">
                  {item?.averageRating?.toFixed(1)}
                </p>
              </div>
            )}
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
            {item?.minHourlyRate}€ - {item?.maxHourlyRate}€
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProfessionalsCard;
