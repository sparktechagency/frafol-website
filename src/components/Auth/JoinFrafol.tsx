"use client";
import React from "react";
import { IoCamera } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import ReuseButton from "../ui/Button/ReuseButton";

const joinOptions = [
  {
    id: "photographer-videographer",
    title: "Photographer/Videographer",
    description: "Showcase your work and find new clients",
    icon: <IoCamera className="text-3xl text-primary-color" />,
  },
  {
    id: "regular-user",
    title: "Regular User",
    description: "Find skilled photographers/ videographers for your needs",
    icon: <LuUser className="text-3xl text-primary-color" />,
  },
];

const JoinFrafol = () => {
  const [userType, setUserType] = React.useState<string | null>(null);

  return (
    <div className=" flex flex-col items-center justify-center gap-3 h-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color">
        Join Frafol
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-base-color">
        Choose how you want to use our platform
      </p>

      <div className="w-fit">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-5">
          {joinOptions?.map(({ id, title, description, icon }) => (
            <div
              key={id}
              onClick={() => setUserType(id)}
              className={`${
                userType === id
                  ? "border border-secondary-color"
                  : "border border-[#E1E1E1]"
              } w-72 p-5 bg-primary-color  rounded-lg cursor-pointer flex flex-col justify-center items-center text-center gap-3`}
            >
              <div className="w-fit p-2 bg-secondary-color rounded-full">
                {icon}
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-bold">
                {title}
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-[#6B7280]">
                {description}
              </p>
            </div>
          ))}
        </div>
        <div
          className={`${
            !userType ? "hidden" : "flex"
          }  justify-end items-end w-full mt-5`}
        >
          <ReuseButton
            variant="secondary"
            className="!w-fit !text-[10px] sm:!text-xs lg:!text-sm !px-5 !py-2.5"
            url={
              userType === "photographer-videographer"
                ? "/sign-up/professional/choose-role"
                : "/sign-up/user"
            }
          >
            Continue
          </ReuseButton>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2.5 mt-10">
        <p>Already have an account?</p>
        <Link href="/" className="text-secondary-color font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default JoinFrafol;
