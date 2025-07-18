/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import ImageGallery from "../ui/ImageGallery";

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
          <ImageGallery<any>
            data={data}
            columnsCountBreakPoints={columnsCountBreakPoints}
          />
        </div>
      </Container>
    </section>
  );
};

export default TalentedProfessionalsImages;
