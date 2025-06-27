import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import CategoryCard from "../shared/CategoryCard";
import Container from "../ui/Container";
import ReuseInput from "../ui/Form/ReuseInput";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    name: "Wedding Photography",
    image: AllImages.categoryimg1,
    description: "Capture your special day",
  },
  {
    name: "Family Photography",
    image: AllImages.categoryimg2,
    description: "Beautiful Family Portraits",
  },
  {
    name: "Newborn Photography",
    image: AllImages.categoryimg3,
    description: "Precious First Moments",
  },
  {
    name: "Commercial Photography",
    image: AllImages.categoryimg5,
    description: "Professional business imagery",
  },
  {
    name: "Wedding Photography",
    image: AllImages.categoryimg1,
    description: "Capture your special day",
  },
  {
    name: "Family Photography",
    image: AllImages.categoryimg2,
    description: "Beautiful Family Portraits",
  },
  {
    name: "Newborn Photography",
    image: AllImages.categoryimg3,
    description: "Precious First Moments",
  },
  {
    name: "Commercial Photography",
    image: AllImages.categoryimg5,
    description: "Professional business imagery",
  },
  {
    name: "Wedding Photography",
    image: AllImages.categoryimg1,
    description: "Capture your special day",
  },
  {
    name: "Family Photography",
    image: AllImages.categoryimg2,
    description: "Beautiful Family Portraits",
  },
  {
    name: "Newborn Photography",
    image: AllImages.categoryimg3,
    description: "Precious First Moments",
  },
  {
    name: "Commercial Photography",
    image: AllImages.categoryimg5,
    description: "Professional business imagery",
  },
];

const PhotographerPage = () => {
  return (
    <div className="mt-10">
      <Container>
        <SectionHeader
          title="Browse All Photography Categories"
          description="Explore our complete range of specialized photography services to match your specific project needs."
        />
        <div className="mt-16">
          <div className="flex justify-end mb-3">
            <ReuseInput
              prefix={<FiSearch className="text-base-color size-4.5" />}
              name="search"
              inputClassName="!bg-background-color !rounded-lg !text-base-color !border-none !shadow-none text-lg font-semibold !w-96 !py-2.5"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-5">
            {data.map((item, index) => (
              <CategoryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhotographerPage;
