"use client";
import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import FeaturedProfessionalsCard from "../shared/FeaturedProfessionalsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const data = [
  {
    image: AllImages.photographer1,
    name: "Peter Novák",
    price: "200",
    rating: "5.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer2,
    name: "Lucia Kováčová",
    price: "250",
    rating: "4.7",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer3,
    name: "Tomáš Varga",
    price: "180",
    rating: "4.5",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer4,
    name: "Veronika Čechová",
    price: "100",
    rating: "4.0",
    profession: "Videographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer2,
    name: "Lucia Kováčová",
    price: "250",
    rating: "4.7",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer1,
    name: "Peter Novák",
    price: "200",
    rating: "5.0",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer3,
    name: "Tomáš Varga",
    price: "180",
    rating: "4.5",
    profession: "Photographer",
    address: "New York, NY",
  },
  {
    image: AllImages.photographer4,
    name: "Veronika Čechová",
    price: "100",
    rating: "4.0",
    profession: "Videographer",
    address: "New York, NY",
  },
];

const AllProfessionals = () => {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          title="Our Professionals"
          description="Discover our top-rated Professionals"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item, index) => (
            <FeaturedProfessionalsCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllProfessionals;
