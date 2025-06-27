"use client";
import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { AllImages } from "../../../public/assets/AllImages";
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    text: "Oriboshi has been our go-to platform for every astrophotography project. We can’t imagine working without it.",
    name: "Koray Okumus",
    image: AllImages.dummyProfile,
  },
  {
    text: "Using Oriboshi has transformed the way I capture the stars. It's intuitive and powerful – perfect for night sky enthusiasts.",
    name: "Lina Sterling",
    image: AllImages.dummyProfile, // You would replace 'dummyProfile2' with the actual key in AllImages
  },
  {
    text: "The community features and resource library on Oriboshi are unmatched. It's a hub for learning and sharing.",
    name: "Rajiv Ahluwalia",
    image: AllImages.dummyProfile,
  },
  {
    text: "I’ve published my best work yet thanks to the tools available on Oriboshi. Highly recommend it for any serious astrophotographer.",
    name: "Claire Beauchamp",
    image: AllImages.dummyProfile,
  },
  {
    text: "From tracking star movements to editing captures, Oriboshi offers everything needed for astrophotography at a professional level.",
    name: "Tomás Herrero",
    image: AllImages.dummyProfile,
  },
];

const Testimonial = () => {
  return (
    <section className="pb-28">
      <Container>
        <SectionHeader
          title="Their Experience, In Their Words"
          description="Hear from clients who found their perfect visual professional through our platform"
        />
        <div className="mt-16 relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
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
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
