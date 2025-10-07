/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ProfessionalReviewRating from "./ProfessionalReviewRating";
import ProfessionalReviewsFiltre from "./ProfessionalReviewsFiltre";
import { AllImages } from "../../../public/assets/AllImages";
import ReviewCard from "./ProfessionalReviewCard";
import { IProfessionalUser } from "@/types";
import { fetchWithAuth } from "@/lib/fetchWraper";
import TagTypes from "@/helpers/config/TagTypes";

const reviews = [
  {
    name: "Róbert Piroh",
    date: "22 Jul",
    avatar: AllImages.dummyProfile,
    rating: 5,
    content:
      "We recently had the pleasure of working with Zuzana for our wedding photography, and we couldn’t be happier with the results. From the moment we met, her passion for photography was clear, and she made us feel so comfortable throughout the entire process. Her attention to detail, creativity, and ability to capture genuine moments truly set her apart.",
  },
  {
    name: "Laura Jameson",
    date: "15 Aug",
    avatar: AllImages.dummyProfile,
    rating: 5,
    content:
      "I had the opportunity to work with Zuzana during our corporate event, and I cannot praise her enough. Her ability to capture the essence of our gathering was remarkable. She blended seamlessly into the background, yet her presence was felt in every incredible photo she delivered.",
  },
  {
    name: "Elena Martinez",
    date: "30 Sep",
    avatar: AllImages.dummyProfile,
    rating: 5,
    content:
      "We hired Zuzana for our family portraits, and the experience was fantastic! From the initial consultation to the final delivery of our photos, she was attentive, enthusiastic, and very professional. She made sure to incorporate our ideas while also offering her expert suggestions.",
  },
  {
    name: "Róbert Piroh",
    date: "22 Jul",
    avatar: AllImages.dummyProfile,
    rating: 5,
    content:
      "We recently had the pleasure of working with Zuzana for our wedding photography, and we couldn’t be happier with the results. From the moment we met, her passion for photography was clear, and she made us feel so comfortable throughout the entire process. Her attention to detail, creativity, and ability to capture genuine moments truly set her apart.",
  },
  {
    name: "Laura Jameson",
    date: "15 Aug",
    avatar: AllImages.dummyProfile,
    rating: 5,
    content:
      "I had the opportunity to work with Zuzana during our corporate event, and I cannot praise her enough. Her ability to capture the essence of our gathering was remarkable. She blended seamlessly into the background, yet her presence was felt in every incredible photo she delivered.",
  },
  {
    name: "Elena Martinez",
    date: "30 Sep",
    avatar: AllImages.dummyProfile,
    rating: 5,
    content:
      "We hired Zuzana for our family portraits, and the experience was fantastic! From the initial consultation to the final delivery of our photos, she was attentive, enthusiastic, and very professional. She made sure to incorporate our ideas while also offering her expert suggestions.",
  },
];

const ProfessionalReviews = async ({
  professionalUser,
  sort,
  rating,
}: {
  professionalUser: IProfessionalUser;
  sort: string;
  rating: string;
}) => {
  const res = await fetchWithAuth(
    `/review/service-provider/${professionalUser?._id}?sort=${sort}&rating=${rating}`,
    {
      next: {
        tags: [TagTypes.prfessional],
      },
    }
  );
  const data = await res.json();
  const reviewss: any = data?.data;
  return (
    <div id="reviews" className="mt-16">
      <SectionHeader title="Reviews" className="mb-3" />
      <ProfessionalReviewRating professionalUser={professionalUser} />
      <ProfessionalReviewsFiltre />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalReviews;
