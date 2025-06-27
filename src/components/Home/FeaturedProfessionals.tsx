"use client";
import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assets/AllImages";
import FeaturedProfessionalsCard from "../shared/FeaturedProfessionalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

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

const FeaturedProfessionals = () => {
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader
          title="Featured Professionals"
          description="Discover our top-rated photographers and videographers"
        />

        <div className="mt-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <FeaturedProfessionalsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProfessionals;
