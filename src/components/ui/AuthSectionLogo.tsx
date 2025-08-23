"use client";
import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const AuthSectionLogo = ({
  skip = false,
  showLogo = false,
}: {
  skip?: boolean;
  showLogo?: boolean;
}) => {
  return (
    <div className={`${skip ? "hidden" : "block"}`}>
      {showLogo ? (
        <Link href="/">
          <Image
            src={AllImages.logo}
            alt="Frafol Logo"
            width={1000}
            height={1000}
            className="w-40 h-auto"
          />
        </Link>
      ) : (
        <IoIosArrowRoundBack
          onClick={() => window.history.back()}
          className="text-3xl text-secondary-color font-extrabold cursor-pointer"
        />
      )}
    </div>
  );
};

export default AuthSectionLogo;
