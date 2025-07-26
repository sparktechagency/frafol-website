import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import CategoryCard from "../shared/CategoryCard";
import ReuseButton from "../ui/Button/ReuseButton";
import Link from "antd/es/typography/Link";

const data = [
  {
    id: "wedding-photography",
    name: "Wedding Photography",
    image: AllImages.categoryimg1,
    description: "Capture your special day",
  },
  {
    id: "family-photography",
    name: "Family Photography",
    image: AllImages.categoryimg2,
    description: "Beautiful Family Portraits",
  },
  {
    id: "newborn-photography",
    name: "Newborn Photography",
    image: AllImages.categoryimg3,
    description: "Precious First Moments",
  },
  {
    id: "commercial-photography",
    name: "Commercial Photography",
    image: AllImages.categoryimg5,
    description: "Professional business imagery",
  },
];

const ExplorePhotographyCategory = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-5">
        {data.map((item, index) => (
          <Link key={index} href={`/photography/${item?.id}`}>
            <CategoryCard key={index} item={item} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center !mt-10">
        <ReuseButton
          url="/"
          className="w-fit  mt-5 !text-sm sm:!text-base lg:!text-lg !py-4.5"
          variant="secondary"
        >
          See All Categories
        </ReuseButton>
      </div>
    </div>
  );
};

export default ExplorePhotographyCategory;
