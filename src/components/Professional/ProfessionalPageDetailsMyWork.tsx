/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ImageGallery from "../ui/ImageGallery";
import ReuseButton from "../ui/Button/ReuseButton";
import { AllImages } from "../../../public/assets/AllImages";

const images = [
  AllImages.categoryimg1,

  AllImages.categoryimg2,

  AllImages.categoryimg3,

  AllImages.categoryimg4,

  AllImages.categoryimg5,

  AllImages.categoryimg6,
];

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3 };

const ProfessionalPageDetailsMyWork = () => {
  return (
    <div className="mt-16">
      <SectionHeader title="My Work" className="mb-3" />
      <div className="mt-5">
        <ImageGallery<any>
          data={images}
          showOnlyImage={true}
          columnsCountBreakPoints={columnsCountBreakPoints}
          arrayOfImages={true}
        />
      </div>
      <div className="mt-10 flex justify-center items-center">
        <ReuseButton
          variant="secondary"
          className="!text-sm sm:!text-base lg:!text-lg !py-4.5 !px-4 !w-fit"
          url="/professionals/user-1/works"
        >
          View More
        </ReuseButton>
      </div>
    </div>
  );
};

export default ProfessionalPageDetailsMyWork;
