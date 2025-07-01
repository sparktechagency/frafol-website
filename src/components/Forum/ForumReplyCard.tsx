import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AllImages } from "../../../public/assets/AllImages";

const ForumReplyCard = () => {
  return (
    <div className="border-b-2 border-background-color pb-5 mt-5">
      <div className="text-xs sm:text-sm lg:text-base flex flex-col gap-2 h-full">
        <Image
          width={1000}
          height={1000}
          src={AllImages?.dummyProfile}
          alt="user"
          className="w-10 h-10 object-cover rounded-full "
        />
        <p className="text-xs sm:text-sm lg:text-base font-bold">Marek Krajč</p>
      </div>
      <div className=" h-full mt-2">
        <p className="text-sm sm:text-base lg:text-lg">
          Introduction to Deep Sky Astrophotography Welcome to the wonderful
          world of deep sky astrophotography! This guide will help beginners
          navigate the sometimes complex journey of capturing beautiful images
          of deep sky objects (DSOs) like galaxies, nebulae, and star clusters.
          Equipment You&apos;ll Need
        </p>
        <div className="flex items-center gap-2 mt-4">
          <AiOutlineLike className="text-secondary-color " />
          <p className="text-base-color  cursor-pointer ">100</p>
        </div>
      </div>
    </div>
  );
};

export default ForumReplyCard;
