import Image, { StaticImageData } from "next/image";
import React from "react";

interface Testimonial {
  text: string;
  name: string;
  image: StaticImageData;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className=" px-4 rounded-3xl flex flex-col justify-between mb-20 min-h-[220px]">
      <p className="font-semibold text-sm sm:text-base lg:text-lg mb-5">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-2">
        <Image
          src={testimonial.image.src}
          alt={testimonial.name}
          width={64}
          height={64}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full "
        />
        <div>
          <p className=" text-sm sm:text-base lg:text-lg text-secondary-color font-semibold ">
            {testimonial.name}
          </p>
          <p className=" text-xs sm:text-sm lg:text-base text-lighter-color">
            {/* {testimonial.name} */} Banská Bystrica
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
