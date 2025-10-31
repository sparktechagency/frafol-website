import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { ICommunityComment } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";

const ForumReplyCard = ({ item }: { item: ICommunityComment }) => {
  const serverUrl = getServerUrl();
  return (
    <div className="border-b-2 border-background-color pb-5 mt-5 w-full">
      <div className="text-xs sm:text-sm lg:text-base flex flex-col gap-2 h-full">
        <Image
          width={1000}
          height={1000}
          src={
            item?.isAnonymous && item?.user?.profileImage
              ? serverUrl + item?.user?.profileImage
              : AllImages?.dummyProfile
          }
          alt="user"
          className="w-10 h-10 object-cover rounded-full "
        />
        <p className="text-xs sm:text-sm lg:text-base font-bold">
          {item?.isAnonymous ? "Anonymous" : item?.user?.name}
        </p>
      </div>
      <div className=" h-full mt-2 w-full">
        <p className="text-sm sm:text-base lg:text-lg">{item?.text}</p>
        {/* <div className="flex items-center gap-2 mt-4">
          <AiOutlineLike className="text-secondary-color " />
          <p className="text-base-color  cursor-pointer ">100</p>
        </div> */}
      </div>
    </div>
  );
};

export default ForumReplyCard;
