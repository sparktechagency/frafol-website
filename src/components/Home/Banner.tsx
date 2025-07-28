"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Revel from "../ui/Animation/Revel";
import BannerSearch from "./BannerSearch";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full min-h-screen z-10 text-secondary-color flex justify-center items-center mx-auto relative overflow-hidden">
      <div className="hidden lg:block">
        {" "}
        <Container>
          <div className="w-full grid grid-cols-1 lg:grid-cols-5 relative">
            <div className="hidden lg:flex flex-col items-center">
              <Image
                src={AllImages.girl}
                alt="Photographer"
                className="w-fit"
              />
              <Link href="/photography">
                <button className="mt-2 bg-secondary-color text-white text-xs sm:text-sm px-3 py-1 rounded-md cursor-pointer">
                  Photographers
                </button>
              </Link>
            </div>
            <div className="text-center flex flex-col items-center justify-center col-span-3">
              <Revel>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 w-[90%] sm:w-[80%] md:w-[70%] mx-auto leading-8 lg:leading-12 xl:leading-14 text-secondary-color">
                  Capture Your Moments with the Best in the Industry
                </h1>
              </Revel>

              <Revel delay={0.5}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-8 text-base-color">
                  Find skilled photographers and videographers, check their
                  portfolios, and book your next shoot easily
                </p>
              </Revel>

              <Revel delay={0.75}>
                <BannerSearch />
              </Revel>
            </div>
            <div className="hidden lg:flex flex-col items-center">
              <Image
                src={AllImages.male}
                alt="Videographer"
                className="w-fit"
              />
              <Link href="/videography">
                <button className="mt-2 bg-secondary-color text-white text-xs sm:text-sm px-3 py-1 rounded-md cursor-pointer">
                  Videographers
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div
        className="relative bg-cover bg-center h-screen block lg:hidden"
        style={{
          width: "100%",
        }}
      >
        <Image
          src={AllImages.herobanner}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute px-4 lg:px-0 inset-0 flex items-center m-auto">
          <div className="text-center flex flex-col items-center justify-center">
            <Revel>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 w-[90%] sm:w-[80%] md:w-[70%] mx-auto leading-8 lg:leading-12 xl:leading-14 text-secondary-color">
                Capture Your Moments with the Best in the Industry
              </h1>
            </Revel>

            <Revel delay={0.5}>
              <p className="text-base sm:text-lg lg:text-xl font-semibold mb-8 text-primary-color">
                Find skilled photographers and videographers, check their
                portfolios, and book your next shoot easily
              </p>
            </Revel>

            <Revel delay={0.75}>
              <BannerSearch />
            </Revel>
          </div>
        </div>
      </div>
    </section>
  );
}
