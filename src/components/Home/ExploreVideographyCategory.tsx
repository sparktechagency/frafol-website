import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import CategoryCard from "../shared/CategoryCard";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-5">
      {data.map((item, index) => (
        <CategoryCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ExploreVideographyCategory;
