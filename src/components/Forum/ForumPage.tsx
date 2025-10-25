import React, { Suspense } from "react";
import SectionHeader from "../ui/SectionHeader";
import ReuseInput from "../ui/Form/ReuseInput";
import { FiSearch } from "react-icons/fi";
import ForumCard from "./ForumCard";
import ForumNewPost from "./ForumNewPost";
import { ICommunityPost } from "@/types";
import PaginationSection from "../shared/PaginationSection";

const ForumPage = ({
  communityPosts,
  totalData,
  page,
  limit,
}: {
  communityPosts: ICommunityPost[];
  totalData: number;
  page: number;
  limit: number;
}) => {
  return (
    <div className="mt-20">
      <SectionHeader
        title="Community Forum"
        description="Connect with other photographers and videographers to discuss gear, techniques, and more."
      />

      <div className="flex justify-center mb-3 mt-5">
        <ReuseInput
          prefix={<FiSearch className="text-base-color size-4.5" />}
          name="search"
          inputClassName="!bg-background-color !rounded-lg !text-base-color !border-none !shadow-none text-lg font-semibold !w-96 !py-2.5"
          placeholder="Search"
          type="text"
        />
      </div>

      <ForumNewPost />

      <div className="mt-16 space-y-6">
        {communityPosts.map((item, index) => (
          <ForumCard key={index} item={item} />
        ))}
      </div>

      <div className="mt-16 flex justify-center items-center">
        {totalData !== 0 && (
          <Suspense fallback={<div>Loading...</div>}>
            <PaginationSection
              page={page}
              limit={limit}
              totalData={totalData}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default ForumPage;
