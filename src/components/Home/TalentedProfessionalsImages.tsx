"use client";
import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import GalleryCard from "../shared/GalleryCard";
import { AllImages } from "../../../public/assets/AllImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const data = [
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg1,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg2,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg3,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg4,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg5,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg6,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg7,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg8,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg9,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg10,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg11,
  },
  {
    name: "Mária Černáková",
    image: AllImages.categoryimg12,
  },
];

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3 };

const TalentedProfessionalsImages = () => {
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader title="From Our Talented Professionals" />
        <div className="mt-16">
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="10px">
              {data?.map((item, index) => (
                <GalleryCard key={index} gallery={item} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container>
    </section>
  );
};

export default TalentedProfessionalsImages;
