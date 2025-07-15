/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

interface FeaturedProfessionalsCardProps {
  item: any;
}

const FeaturedProfessionalsCard: React.FC<FeaturedProfessionalsCardProps> = ({
  item,
}) => {
  const id = "user-1";
  return (
    <div className="flex flex-col gap-2">
      <Link href={`/professionals/${id}`}>
        <Image
          width={2000}
          height={2000}
          src={item.image}
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
                {item?.rating}
              </p>
            </div>
          </div>
          <p className="text-base-color text-xs lg:text-sm font-medium mt-1">
            {item?.profession}
          </p>
          <p className="flex items-center gap-1 text-base-color text-xs lg:text-sm font-medium mt-1">
            <IoLocationSharp /> {item?.address}
          </p>
          <p className="text-base-color text-xs lg:text-sm font-medium mt-1">
            ${item?.price}/hr
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProfessionalsCard;
