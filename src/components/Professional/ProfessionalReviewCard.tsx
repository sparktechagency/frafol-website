/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Rate } from "antd";
import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ review }: { review: any }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded((prev) => !prev);

  const maxChars = 150;
  const isLong = review.content.length > maxChars;
  const displayText = expanded
    ? review.content
    : review.content.slice(0, maxChars) + (isLong ? "..." : "");

  return (
    <div className="p-4 rounded-lg shadow-none hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Image
            width={2000}
            height={2000}
            alt="avatar"
            className="rounded-full w-6 sm:w-8 lg:w-10  h-6 sm:h-8 lg:h-10  object-cover"
            src={review.avatar}
          />
          <div className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold">
            {review.name}
          </div>
          <span className="text-xs sm:text-sm lg:text-base font-light">
            · {review.date}
          </span>
        </div>
        <Rate disabled defaultValue={review.rating} />
      </div>

      {/* Content */}
      <div className="text-xs sm:text-sm lg:text-base mb-2">
        {displayText}
        {isLong && (
          <button
            onClick={toggleReadMore}
            className="ml-1 text-secondary-color hover:underline text-sm "
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
