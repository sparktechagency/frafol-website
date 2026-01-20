"use client";
import React from "react";
import FeaturedProfessionalsCard from "../shared/FeaturedProfessionalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { IProfessional } from "@/types";

const FeaturedProfessionalSlider = ({ data }: { data: IProfessional[] }) => {
  return (
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
          slidesPerView: 1.5,
          spaceBetween: 50,
        },
        768: {
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
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <FeaturedProfessionalsCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedProfessionalSlider;
