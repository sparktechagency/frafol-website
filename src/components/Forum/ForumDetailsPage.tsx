import Image from "next/image";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { AllImages } from "../../../public/assets/AllImages";
import ForumReplyCard from "./ForumReplyCard";
import ForumSubmitReply from "./ForumSubmitReply";
import Link from "next/link";

const ForumDetailsPage = () => {
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
            Deep Sky Imaging Guide for Beginners
          </h1>
          <div className="flex items-center gap-5">
            <p className="text-xs sm:text-sm lg:text-base  mt-4">
              Posted 3 days ago
            </p>
            <p className="text-xs sm:text-sm lg:text-base  mt-4">1250 views</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="text-xs sm:text-sm lg:text-base p-5 flex flex-col items-center gap-2">
            <Image
              width={1000}
              height={1000}
              src={AllImages?.dummyProfile}
              alt="user"
              className="w-10 h-10 object-cover rounded-full "
            />
            <p className="text-xs sm:text-sm lg:text-base font-bold">
              Marek Krajč
            </p>
          </div>
          <div className=" p-5 lg:border-l lg:border-background-color ">
            <p className="text-sm sm:text-base lg:text-lg">
              Introduction to Deep Sky Astrophotography Welcome to the wonderful
              world of deep sky astrophotography! This guide will help beginners
              navigate the sometimes complex journey of capturing beautiful
              images of deep sky objects (DSOs) like galaxies, nebulae, and star
              clusters. Equipment You&apos;ll Need
            </p>
            <div className="flex items-center gap-2 mt-5">
              <p className="text-sm sm:text-base lg:text-lg font-bold text-nowrap">
                Telescope:
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                An equatorially mounted telescope or telephoto lens
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm sm:text-base lg:text-lg font-bold text-nowrap">
                Mount:
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                A tracking mount is essential for deep sky work
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm sm:text-base lg:text-lg font-bold text-nowrap">
                Accessories:
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                T-adapter, field flattener (optional), guidescope (optional
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm sm:text-base lg:text-lg font-bold text-nowrap">
                Telescope:
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                An equatorially mounted telescope or telephoto lens
              </p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-5">
              Remember that this hobby takes patience and practice. Don&apos;t
              get discouraged if your first images don&apos;t look like
              Hubble&apos;s! Each session is a learning experience. I&apos;ll be
              updating this guide with more specific tutorials based on your
              questions.
            </p>
          </div>
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
