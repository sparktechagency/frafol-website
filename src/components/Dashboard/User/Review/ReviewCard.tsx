/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rate } from "antd";
import React from "react";

const ReviewCard = ({
  activeTab,
  data,
  openModal = () => {},
}: {
  activeTab: string;
  data: any;
  openModal?: () => void;
}) => {
  console.log(data);
  return (
    <div className="p-4 rounded-md border border-[#E1E1E1] shadow-xs hover:shadow-md transition-all duration-200">
      <div>
        <div className="flex items-center justify-between">
          <div>
            {" "}
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-secondary-color mb-1">
              Standard Wedding Photography{" "}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              By Peter Kováč{" "}
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-1">
              Completed on June 24, 2025
            </p>
            <div className="text-xs sm:text-sm text-[#5D5D5D] flex items-center gap-1 mt-2">
              <Rate disabled value={5} allowHalf />
            </div>
            <p className="ttext-xs sm:text-sm lg:text-base flex items-center gap-1 mt-2">
              Peter did an absolutely amazing job capturing our special day! The
              photos are stunning and she was so professional throughout the
              entire process. Highly recommend!
            </p>
          </div>
          <div>
            {activeTab === "allReviews" ? (
              <button
                onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-secondary-color rounded bg-secondary-color text-white text-sm transition cursor-pointer"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => openModal()}
                className="flex items-center gap-1 px-3 py-1 border border-secondary-color rounded bg-secondary-color text-white text-sm transition cursor-pointer"
              >
                Write Review
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
