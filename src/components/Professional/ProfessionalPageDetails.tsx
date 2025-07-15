import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ReuseButton from "../ui/Button/ReuseButton";
import { AiFillMessage } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";

const ProfessionalPageDetails = () => {
  return (
    <main className="pb-20 pt-10">
      <Container>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image
            width={2000}
            height={2000}
            src={AllImages?.dummyProfile}
            alt="user"
            className="w-32 h-32 object-cover rounded-full "
          />
          <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-secondary-color mt-3">
            Marek Krajč
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
            $200/hr
          </p>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium flex items-center gap-2">
            <FaStar className="text-[#FFD700] text-sm sm:text-base lg:text-lg -mt-0.5" />{" "}
            <span> 5.0 (124 Reviews)</span>
          </p>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium flex items-center gap-2">
            <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg -mt-0.5" />{" "}
            <span>Prešov</span>
          </p>
          <div className="flex items-center gap-2">
            <ReuseButton
              variant="secondary"
              className="!py-4.5 !px-4 !text-xs sm:!text-sm lg:!text-base flex items-center"
            >
              <AiFillMessage /> Contact
            </ReuseButton>
            <ReuseButton
              variant="outline"
              className="!py-4.5 !px-4 !text-xs sm:!text-sm lg:!text-base !text-secondary-color !border-secondary-color flex items-center"
            >
              <IoCameraOutline className="" /> Book a Session
            </ReuseButton>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProfessionalPageDetails;
