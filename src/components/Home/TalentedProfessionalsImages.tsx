import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import ImageGallery from "../ui/ImageGallery";

const data = [
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg1?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg2?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg3?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg4?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg5?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg6?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg7?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg8?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg9?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg10?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg11?.src,
  },
  {
    id: "68d0e59de28c1fc356b4916b",
    name: "Mária Černáková",
    image: AllImages.categoryimg12?.src,
  },
];

const columnsCountBreakPoints = { 350: 1, 600: 2, 1024: 3 };

const TalentedProfessionalsImages = () => {
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader title="From Our Talented Professionals" />
        <div className="mt-16">
          <ImageGallery<{ id: string; name: string; image: string }>
            data={data}
            columnsCountBreakPoints={columnsCountBreakPoints}
          />
        </div>
      </Container>
    </section>
  );
};

export default TalentedProfessionalsImages;
