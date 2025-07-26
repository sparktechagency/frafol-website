import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ReuseButton from "../ui/Button/ReuseButton";
import { AiFillMessage } from "react-icons/ai";
import SectionHeader from "../ui/SectionHeader";
import ProfessionalPageDetailsMyServices from "./ProfessionalPageDetailsMyServices";
import ProfessionalPageDetailsMyWork from "./ProfessionalPageDetailsMyWork";
import ProfessionalPageDetailsBookSession from "./ProfessionalPageDetailsBookSession";
import ProfessionalReviews from "./ProfessionalReviews";
import Link from "next/link";

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
            100€ - 500€
          </p>
          <Link href="#reviews">
            {" "}
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium flex items-center gap-2">
              <FaStar className="text-[#FFD700] text-sm sm:text-base lg:text-lg -mt-0.5" />{" "}
              <span> 5.0 (124 Reviews)</span>
            </p>{" "}
          </Link>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium flex items-center gap-2">
            <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg -mt-0.5" />{" "}
            <span>Prešov</span>
          </p>
          <div className="flex items-center gap-2">
            <ReuseButton
              variant="secondary"
              className="!py-4.5 !px-4 !text-xs sm:!text-sm lg:!text-base flex items-center"
              url="/message"
            >
              <AiFillMessage /> Contact
            </ReuseButton>
            <ProfessionalPageDetailsBookSession />
          </div>
        </div>
        <div className="mt-16">
          <SectionHeader title="About Me" className="mb-3" />
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
            Hi there! I&apos;m Zuzana Králiková, a passionate photographer based
            in Prešov. With a deep love for capturing the beauty of the world
            around me, I specialize in creating stunning, authentic moments
            through the lens. Whether it&apos;s a serene landscape, intimate
            portraits, or vibrant cityscapes, my goal is to tell stories through
            every photograph I take.I strive to bring creativity,
            professionalism, and a keen eye for detail to every project. My
            photography style is all about finding beauty in the natural world
            and presenting it in a way that speaks to the soul.Let`s capture
            something special together!
          </p>
        </div>
        <ProfessionalPageDetailsMyWork />
        <ProfessionalPageDetailsMyServices />
        <ProfessionalReviews />
      </Container>
    </main>
  );
};

export default ProfessionalPageDetails;
