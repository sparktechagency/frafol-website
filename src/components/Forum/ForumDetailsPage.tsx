import Image from "next/image";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { AllImages } from "../../../public/assets/AllImages";
import ForumReplyCard from "./ForumReplyCard";
import ForumSubmitReply from "./ForumSubmitReply";
import Link from "next/link";
import { ICommunityPost } from "@/types";
import { formatDateTime } from "@/utils/dateFormet";
import { getServerUrl } from "@/helpers/config/envConfig";

const ForumDetailsPage = ({
  communityPosts,
}: {
  communityPosts: ICommunityPost;
}) => {
  const serverUrl = getServerUrl();
  return (
    <div className="py-16">
      <Link href="/forums">
        <div className="flex items-center gap-2 text-secondary-color cursor-pointer text-sm sm:text-base lg:text-lg font-bold">
          <GoArrowLeft className="text-lg sm:text-xl lg:text-2xl font-bold" />
          <p>Back To Topics</p>
        </div>
      </Link>
      {/* Main Post  */}
      <div className="mt-10 rounded-xl border border-background-color">
        <div className=" p-4 border-b border-background-color">
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
            {communityPosts?.title}
          </h1>
          <div className="flex items-center gap-5">
            <p className="text-xs sm:text-sm lg:text-base  mt-4">
              Posted {formatDateTime(communityPosts?.createdAt)}
            </p>
            <p className="text-xs sm:text-sm lg:text-base  mt-4">
              {communityPosts?.totalViewers} views
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-2 ">
          <div className="text-xs sm:text-sm lg:text-base p-1 flex flex-col items-center gap-2 min-w-28">
            <Image
              width={1000}
              height={1000}
              src={
                communityPosts?.authorId?.profileImage
                  ? serverUrl + communityPosts?.authorId?.profileImage
                  : AllImages?.dummyProfile
              }
              alt="user"
              className="w-10 h-10 object-cover rounded-full "
            />
            <p className="text-xs sm:text-sm lg:text-base font-bold">
              {communityPosts?.authorId?.name}
            </p>
          </div>
          <div className="p-5 lg:border-l lg:border-background-color">
            <Image
              width={1000}
              height={1000}
              src={
                communityPosts?.images?.[0]
                  ? serverUrl + communityPosts?.images?.[0]
                  : AllImages?.dummyCover?.src
              }
              alt="user"
              className="w-full lg:w-1/2 mx-auto h-auto object-cover rounded-lg mb-10"
            />
            <div
              dangerouslySetInnerHTML={{ __html: communityPosts?.text }}
            ></div>
          </div>{" "}
        </div>
      </div>
      {/* Replies Card */}
      <div className="rounded-xl border border-background-color flex flex-col gap-2 p-5 items-start mt-16">
        <p className="text-base sm:text-lg lg:text-xl font-bold">Replies</p>

        {Array.from({ length: 4 }).map((item, index) => (
          <ForumReplyCard key={index} />
        ))}
        <ForumSubmitReply />
      </div>
    </div>
  );
};

export default ForumDetailsPage;
