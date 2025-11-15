import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SectionHeader from "../ui/SectionHeader";
import ProfessionalPageDetailsMyServices from "./ProfessionalPageDetailsMyServices";
import ProfessionalPageDetailsMyWork from "./ProfessionalPageDetailsMyWork";
import ProfessionalPageDetailsBookSession from "./ProfessionalPageDetailsBookSession";
import ProfessionalReviews from "./ProfessionalReviews";
import Link from "next/link";
import { IProfessionalUser, IProfile, ISignInUser } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";
import { getCurrentUser } from "@/services/AuthService";
import CreateConversionButton from "./CreateConversionButton";

const ProfessionalPageDetails = async ({
  professionalUser,
  sort,
  rating,
}: {
  professionalUser: IProfessionalUser;
  sort: string;
  rating: string;
}) => {
  const userData: ISignInUser = await getCurrentUser();
  const serverUrl = getServerUrl();

  const res = await fetchWithAuth("/users/my-profile", {
    next: {
      tags: [TagTypes.profile],
    },
  });

  const data = await res.json();

  const myData: IProfile = data?.data;

  return (
    <main className="pb-20 pt-16">
      <Container>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image
            width={2000}
            height={2000}
            src={
              professionalUser?.profileImage?.length > 0
                ? serverUrl + professionalUser?.profileImage
                : AllImages?.dummyProfile
            }
            alt="user"
            className="w-32 h-32 object-cover rounded-full "
          />
          <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-secondary-color mt-3">
            {professionalUser?.name}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
            Average price: {professionalUser?.minHourlyRate}€ -{" "}
            {professionalUser?.maxHourlyRate}€
          </p>
          <p className=" text-xs sm:text-sm lg:text-base xl:text-lg text-secondary-color font-medium mt-1">
            {professionalUser?.role === "both"
              ? "Videographer & Photographer"
              : professionalUser?.role === "photographer"
              ? "Photographer"
              : "Videographer"}
          </p>
          <Link href="#reviews">
            {" "}
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium flex items-center gap-2">
              <FaStar className="text-[#FFD700] text-sm sm:text-base lg:text-lg -mt-0.5" />{" "}
              <span>
                {" "}
                {professionalUser?.averageRating} (
                {professionalUser?.totalReview} Reviews)
              </span>
            </p>{" "}
          </Link>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium flex items-center gap-2">
            <FaLocationDot className="text-secondary-color text-sm sm:text-base lg:text-lg -mt-0.5" />{" "}
            <span>{professionalUser?.address}</span>
          </p>
          {myData?.role === "user" ? (
            <div className="flex items-center gap-2">
              <CreateConversionButton professionalUser={professionalUser} />
              <ProfessionalPageDetailsBookSession
                myData={myData}
                professionalUser={professionalUser}
              />
            </div>
          ) : myData?.role === "company" ? (
            <div className="flex items-center gap-2">
              <CreateConversionButton professionalUser={professionalUser} />

              <ProfessionalPageDetailsBookSession
                myData={myData}
                professionalUser={professionalUser}
              />
            </div>
          ) : myData?.role && userData?.userId !== professionalUser?._id ? (
            <div className="flex items-center gap-2">
              <CreateConversionButton professionalUser={professionalUser} />
            </div>
          ) : (
            !myData?._id && (
              <div className="flex items-center gap-2">
                <ProfessionalPageDetailsBookSession
                  myData={myData}
                  professionalUser={professionalUser}
                />
              </div>
            )
          )}
        </div>
        <div className="mt-16">
          <SectionHeader title="About Me" className="mb-3" />
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
            {professionalUser?.profileId?.about}
          </p>
        </div>
        <ProfessionalPageDetailsMyWork
          gallery={professionalUser?.gallery?.slice(0, 9)}
          professionalId={professionalUser?._id}
        />
        <ProfessionalPageDetailsMyServices
          packages={professionalUser?.package}
          myData={myData}
        />
        <ProfessionalReviews
          professionalUser={professionalUser}
          sort={sort}
          rating={rating}
        />

        <h4 className="text-gray-400 text-lg ">Show More Information</h4>
      </Container>
    </main>
  );
};

export default ProfessionalPageDetails;
