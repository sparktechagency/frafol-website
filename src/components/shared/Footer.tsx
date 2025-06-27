"use client";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import Container from "../ui/Container";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="relative  lg:h-[395px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="lg:fixed lg:bottom-0 h-auto w-full">
        <footer className="pt-16 pb-5 bg-secondary-color">
          <Container>
            <div className="flex flex-col justify-start lg:justify-center items-start lg:items-center  mx-auto ">
              {/* 1st */}
              <div className="mb-10">
                <Image
                  src={AllImages.logo2}
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[250px] md:w-[300px] lg:w-[350px]"
                />
              </div>
              <div className="flex items-center font-medium flex-wrap gap-3 text-primary-color ">
                <Link href="/about-us">
                  <p>About Us</p>
                </Link>

                <Link href="#">
                  <p>Explore</p>
                </Link>

                <Link href="#">
                  <p>Saved</p>
                </Link>

                <Link href="#">
                  <p>Pricing</p>
                </Link>
              </div>
            </div>
            <div className="border-t border-primary-color mt-8"></div>
            <div className="">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-10 gap-10 lg:gap-0 mb-10">
                <div>
                  <p className=" text-[#FDFDFD] text-lg">
                    &copy; {currentYear} HAVN . All rights received
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-5 lg:text-lg lg:-ml-[11%]">
                  <Link href="/privacy-policy">
                    <p className="text-primary-color">Privacy Policy</p>
                  </Link>
                  <Link href="/terms-of-use">
                    <p className="text-primary-color">Terms of Use</p>
                  </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                  <div className="flex items-center flex-wrap gap-3 mb-4">
                    <Link href="#">
                      <FaFacebook className="text-primary-color size-6" />
                    </Link>

                    <Link href="#">
                      <FaLinkedin className="text-primary-color size-6" />
                    </Link>

                    <Link href="#">
                      <FaYoutube className="text-primary-color size-6" />
                    </Link>

                    <Link href="#">
                      <LuInstagram className="text-primary-color size-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}
