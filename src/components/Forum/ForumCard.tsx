/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { BsFillEyeFill } from "react-icons/bs";
import Link from "next/link";

const ForumCard = ({ item }: { item: any }) => {
  return (
    <div className="p-2 border-b border-base-color/30">
      <div className="flex items-center gap-2 mb-3">
        <Image
          width={1000}
          height={1000}
          src={item.image}
          alt={item?.name || "item Image"}
          className="w-10 h-10 object-cover rounded-full "
        />
        <div>
          <p className="text-base-color text-xs sm:text-sm lg:text-base font-medium cursor-pointer">
            {item?.name}
          </p>
          <p className="text-base-color text-xs sm:text-sm lg:text-base font-medium  cursor-pointer">
            {item?.time} min ago
          </p>
        </div>
      </div>
      <Link href={`/forums/${item?.id}`}>
        <h1 className="text-secondary-color font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-1">
          {item?.title}
        </h1>
      </Link>
      <p className="text-base-color text-sm sm:text-xs lg:text-base xl:text-lg font-medium mb-1">
        {item?.description}
      </p>
      <div className="flex items-center gap-3 mt-5 text-sm sm:text-base lg:text-lg font-semibold">
        <div className="flex items-center gap-2">
          <AiOutlineLike className="text-secondary-color " />
          <p className="text-base-color  cursor-pointer">{item?.like}</p>
        </div>
        <div className="flex items-center gap-2">
          <GoCommentDiscussion className="text-secondary-color " />
          <p className="text-base-color cursor-pointer">{item?.comment}</p>
        </div>
        <div className="flex items-center gap-2">
          <BsFillEyeFill className="text-secondary-color " />
          <p className="text-base-color cursor-pointer">{item?.view}</p>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
