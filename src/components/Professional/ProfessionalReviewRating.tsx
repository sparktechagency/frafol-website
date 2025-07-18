import React from "react";
import { Rate, Progress } from "antd";

const ratings = [
  { star: 5, count: 120 },
  { star: 4, count: 10 },
  { star: 3, count: 2 },
  { star: 2, count: 4 },
  { star: 1, count: 1 },
];

const totalRatings = ratings.reduce((acc, curr) => acc + curr.count, 0);

const getPercent = (count: number) =>
  totalRatings > 0 ? (count / totalRatings) * 100 : 0;

const ProfessionalReviewRating = () => {
  const averageRating =
    totalRatings > 0
      ? (
          ratings.reduce((sum, r) => sum + r.star * r.count, 0) / totalRatings
        ).toFixed(1)
      : "0.0";

  return (
    <div className="flex flex-col lg:flex-row items-center  gap-8 w-full">
      {/* Left side: Rating breakdown */}
      <div className=" space-y-2">
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold text-secondary-color">
          {totalRatings} Ratings
        </p>
        {ratings.map(({ star, count }) => (
          <div key={star} className="flex items-center gap-2 w-full">
            <div className="text-xl sm:text-sm lg:text-base xl:text-lg font-semibold">
              {star} Star
            </div>
            <div className="w-[500px]">
              <Progress
                size="default"
                percent={getPercent(count)}
                showInfo={false}
                strokeColor="#FACC15"
              />
            </div>
            <div className="text-xl sm:text-sm lg:text-base xl:text-lg font-semibold">
              ({count})
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Average rating */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          {averageRating}
        </div>
        <Rate disabled defaultValue={5} className="text-[#FACC15]" />
      </div>
    </div>
  );
};

export default ProfessionalReviewRating;
