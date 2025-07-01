"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ReuseInput from "../ui/Form/ReuseInput";
import { FiSearch } from "react-icons/fi";
import { AllImages } from "../../../public/assets/AllImages";
import ForumCard from "./ForumCard";
import ForumNewPost from "./ForumNewPost";

// ✅ Define the ForumPost type
type ForumPost = {
  name: string;
  image: string;
  time: number;
  title: string;
  description: string;
  like: number;
  comment: number;
  view: number;
};

// ✅ Sample data without id (we'll inject it below)
const sampleData: Omit<ForumPost, "id"> = {
  name: "Arisha",
  image: AllImages.dummyProfile?.src,
  time: 5,
  title: "Photography Tricks and Tips - Share Your Knowledge!",
  description:
    "What are some photography tricks and tips you’ve learned over time? Whether it’s about camera settings, lighting techniques, or creative composition, we’d love to hear what has worked for you. Please share your best advice for beginners and advanced photographers alike!",
  like: 10,
  comment: 4,
  view: 200,
};

// ✅ Generate 12 dummy posts with unique random IDs
const forumPosts: ForumPost[] = Array.from({ length: 12 }, () => ({
  id: crypto.randomUUID(),
  ...sampleData,
}));

const ForumPage: React.FC = () => {
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
        {forumPosts.map((item, index) => (
          <ForumCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
