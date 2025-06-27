import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import CategoryCard from "../shared/CategoryCard";
import ReuseButton from "../ui/Button/ReuseButton";

const data = [
  {
    name: "Wedding Videography",
    image: AllImages.categoryimg1,
    description: "Capture your special day",
  },
  {
    name: "Family Videography",
    image: AllImages.categoryimg2,
    description: "Beautiful Family Moments",
  },
  {
    name: "Newborn Videography",
    image: AllImages.categoryimg3,
    description: "Precious First Moments",
  },
  {
    name: "Commercial Videography",
    image: AllImages.categoryimg5,
    description: "Professional business imagery",
  },
];

const ExploreVideographyCategory = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-5">
        {data.map((item, index) => (
          <CategoryCard key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center !mt-10">
        <ReuseButton
          url="/photography"
          className="w-fit  mt-5 !text-sm sm:!text-base lg:!text-lg !py-4.5"
          variant="secondary"
        >
          See All Categories
        </ReuseButton>
      </div>
    </div>
  );
};

export default ExploreVideographyCategory;
