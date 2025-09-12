import { getServerUrl } from "@/helpers/config/envConfig";
import { ITestimonial } from "@/types/testimonial.type";
import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const serverUrl = getServerUrl();

  return (
    <div className=" px-4 rounded-3xl flex flex-col justify-between mb-20 min-h-[220px]">
      <p className="font-semibold text-sm sm:text-base lg:text-lg mb-5">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-2">
        <Image
          src={
            testimonial?.userId?.profileImage?.length > 0
              ? serverUrl + testimonial?.userId?.profileImage
              : AllImages.dummyProfile
          }
          alt={testimonial?.userId?.name || "Profile Image"}
          width={64}
          height={64}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full "
        />
        <div>
          <p className=" text-sm sm:text-base lg:text-lg text-secondary-color font-semibold ">
            {testimonial?.userId?.name}
          </p>
          <p className=" text-xs sm:text-sm lg:text-base text-lighter-color">
            {testimonial?.userId?.switchRole}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
