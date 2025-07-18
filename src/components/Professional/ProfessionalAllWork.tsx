/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ImageGallery from "@/components/ui/ImageGallery";
import Container from "@/components/ui/Container";
import { AllImages } from "../../../public/assets/AllImages";
import ReuseButton from "../ui/Button/ReuseButton";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const images = [
  AllImages.categoryimg1,

  AllImages.categoryimg2,

  AllImages.categoryimg3,

  AllImages.categoryimg4,

  AllImages.categoryimg5,

  AllImages.categoryimg6,

  AllImages.categoryimg7,

  AllImages.categoryimg8,

  AllImages.categoryimg9,

  AllImages.categoryimg10,

  AllImages.categoryimg11,

  AllImages.categoryimg12,
];

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3 };

const ProfessionalAllImages = () => {
  return (
    <main className="pb-20 pt-10">
      <Container>
        <div className="my-16">
          <ReuseButton
            variant="outline"
            className="!px-0 !py-0 flex items-center w-fit !border-none !border-transparent !text-secondary-color"
            url="/professionals/user-1"
          >
            <MdOutlineArrowBackIosNew className="mr-2" /> Back
          </ReuseButton>
        </div>
        <ImageGallery<any>
          data={images}
          showOnlyImage={true}
          columnsCountBreakPoints={columnsCountBreakPoints}
          arrayOfImages={true}
          photoView={true}
        />
      </Container>
    </main>
  );
};

export default ProfessionalAllImages;
